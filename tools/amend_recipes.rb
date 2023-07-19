
require 'json'

def find_max_request(dish, all_requests)
  all_requests.map {|r| r['dishes'].include?(dish) ? lvl = r['quality'] : 0}.max
end




all_recipes = JSON.parse(File.read('./build/all_recipes.json'))
all_requests = JSON.parse(File.read('./build/gourmet_requests.json'))
all_recipes.each do |recipe|
  # Find any requests that want this recipe
  lvl = find_max_request(recipe['name'], all_requests)
  if lvl > 0
    puts "Recipe #{recipe['name']} is Lovett Level #{lvl}"
    recipe['lovett'] = lvl
  end
end

out_f = File.open('build/all_recipes.json', 'w')
out_f.puts JSON.pretty_generate(all_recipes)
out_f.close
