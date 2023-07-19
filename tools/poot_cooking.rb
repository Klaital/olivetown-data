
require 'nokogiri'
require 'net/http'
require 'json'

#root_url = URI('https://ranchstory.miraheze.org/wiki/Cooking_(Story_of_Seasons:_Pioneers_of_Olive_Town)')

class Recipe
  attr_accessor :icon, :name, :level, :group,
                :flavors, :temperatures, :colors,
                :ingredients, :topping,
                :how_to, :lovett

  def to_s
    "#{self.name}"
  end

  def icon
    @icon
  end
  def icon=(newicon)
    @icon = if newicon =~ /miraheze/
              "/ot/static/icons/#{newicon.split('/')[-1]}"
            else
              newicon
            end
  end

  def as_json(options={})
    {
      icon: @icon,
      name: @name,
      level: @level,
      group: @group,
      flavors: @flavors,
      temperatures: @temperatures,
      colors: @colors,
      ingredients: @ingredients,
      topping: @topping,
      how_to: @how_to,
      lovett: @lovett,
    }
  end

  def to_json(*options)
    as_json(*options).to_json(*options)
  end
end

def parse_recipe_table(html_table, group_name)
  data = Nokogiri::HTML.parse(html_table)
  skipped_header = false
  rows = data.xpath('//tr')
  recipes = []
  rows.each do |row|
    next if row.kind_of?(Nokogiri::XML::Text)

    unless skipped_header
      skipped_header = true
      next
    end

    # idx is an iterator used to keep track of which column is being parsed
    idx = 0
    # Init the recipe object with the culinary group name. The data files are separated per-table.
    r = Recipe.new
    r.group = group_name

    row.children.each do |td|
      next if td.kind_of?(Nokogiri::XML::Text)

      # Column definitions:
      # 0: icon
      # 1: name
      # 2: level
      # 3: flavors
      # 4: temperature
      # 5: colors
      # 6-9: ingredients
      # 10: topping
      case idx
      when 0
        img = td.children[0].children[0]
        src = img.attribute_nodes.select {|attrib| attrib.name == 'src'}.first.value
        r.icon = src # TODO: parse the filename from the URL and compute the filename as hosted on this server
      when 1
        r.name = td.children[0].children[0].text.strip
      when 2
        r.level = td.children[0].text.strip.to_i
      when 3
        r.flavors = td.children[0].text.strip.split(', ')
      when 4
        r.temperatures = td.children[0].text.strip.split(', ')
      when 5
        r.colors = td.children.map { |node| node.text =~ /^[A-Za-z]+$/ ? node.text : nil }.compact
      when 6
        r.ingredients = [td.text.strip]
      when 7
        r.ingredients.unshift td.text.strip unless td.text.strip == '-'
      when 8
        r.ingredients.unshift td.text.strip unless td.text.strip == '-'
      when 9
        r.ingredients.unshift td.text.strip unless td.text.strip == '-'
      when 10
        r.topping = td.text.strip
      end
      idx += 1
    end
    puts r.to_s
    recipes.unshift(r)
  end
  recipes
end


CONTENT_FILES = {
  'Salads' => './data/recipes/salads_recipes.html',
  'Soups' => './data/recipes/soups_recipes.html',
  'Entrees' => './data/recipes/entrees_recipes.html',
  'Desserts' => './data/recipes/desserts_recipes.html',
  'Other' => './data/recipes/other_recipes.html',
}
def load_all_recipes
  content = {}
  CONTENT_FILES.each_pair do |group, path|
    puts "Parsing #{group} from #{path}"
    content[group] = parse_recipe_table(File.read(path), group)
  end

  all_recipes = []
  content.each_pair do |group, recipe_set|
    puts "Got #{recipe_set.length} #{group} recipes"
    all_recipes = all_recipes + recipe_set
  end

end
##############
#### MAIN ####
##############

all_recipes = load_all_recipes
puts "\n > Got #{all_recipes.length} recipes in all"
out_f = File.open('build/all_recipes.json', 'w')
out_f.puts JSON.pretty_generate(all_recipes)
out_f.close
