

require 'nokogiri'
require 'net/http'
require 'json'

class GourmetRequest
  attr_accessor :dishes, :quality, :reward, :descr
  def to_s
    "#{self.descr}"
  end

  def as_json(options={})
    {
      dishes: @dishes,
      quality: @quality,
      reward: @reward,
      descr: @descr,
    }
  end

  def to_json(*options)
    as_json(*options).to_json(*options)
  end

  def self.parse_tr(tr)
    return nil if tr.kind_of?(Nokogiri::XML::Text)
    r = GourmetRequest.new
    idx = 0
    tr.children.each do |td|
      next if td.kind_of?(Nokogiri::XML::Text)
      return nil if td.name == 'th' # this is a header row, not a data row
      # Column definitions:
      # 0: icon (empty in this page)
      # 1: descr
      # 2: dish name
      # 3: quality required
      # 4: reward
      case idx
      when 1
        r.descr = td.children[0].text.strip
      when 2
        if td.children.length > 1
          # Parse table of possibilities
          options_node = td.children[0].children[1].children[2]
          r.dishes = options_node.children.map {|td| td.kind_of?(Nokogiri::XML::Text) ? nil : td.children[1].children[0].children[0].text}.compact
        else
          # Parse single option
          r.dishes = [td.children[0].text.strip]
        end
      when 3
        r.quality = case td.children[0].text.strip
                    when 'Any Quality'
                      1
                    when 'Top Quality'
                      11
                    else
                      td.children[0].text[/\d+/].to_i
                    end
      when 4
        r.reward = td.children[1].text.split("\r\n").map {|t| t.strip}
      end
      idx += 1
    end

    return r
  end
end

CONTENT_FILES = %w[./data/lovett/rank1.html ./data/lovett/rank2.html ./data/lovett/rank3.html ./data/lovett/rank4.html ./data/lovett/rank5.html]

def all_gourmet_requests
  all_requests = []
  CONTENT_FILES.each do |path|
    puts "Parsing #{path}"
    doc = Nokogiri::HTML.parse(File.read(path))
    data_table = doc.children[1].children[0].children[0].children[1]
    requests = data_table.children.map {|tr| GourmetRequest.parse_tr(tr)}.compact
    puts " > Parsed #{requests.length} requests"
    requests.each do |r|
      puts " >> #{r.dishes.join(' or ')}"
    end
    all_requests = all_requests + requests
  end
  return all_requests
end

##############
#### MAIN ####
##############

requests = all_gourmet_requests
out_f = File.open('build/gourmet_requests.json', 'w')
out_f.puts JSON.pretty_generate(requests)
out_f.close
