from bs4 import BeautifulSoup
import urllib.parse, requests
# Scraper should grab top 3 results for [item name], then return price, image, and link


# Amazon

# Get all a hrefs w/ link to product, then parent div, then get title, image, and price



HEADERS = ({'User-Agent':
           "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36",
            'Accept-Language': 'en-US, en;q=0.5'})
 

# product div = ".s-result-item.s-asin"
# product name = "span.a-size-medium a-color-base a-text-normal"
# product price = "a_price"
# product image = "s_image"
# product link = "a-link-normal"
def scrapeAmazon(product):
    url = "http://amazon.com/s?k="+urllib.parse.quote(product)
    print("Getting information for "+url)

    webpage = requests.get(url, headers=HEADERS)
    soup = BeautifulSoup(webpage.content, "lxml")
    productContainers = soup.select(".s-result-item.s-asin")
    print(str(len(productContainers)) + " items found")
    products = []

    for container in productContainers:
        product = {}
        product['name'] = container.select_one("span.a-size-medium.a-color-base.a-text-normal").text
        product['price'] = container.select_one("span.a-offscreen").text
        product['image'] = container.select_one('img.s-image')['src']
        product['link'] = "https://smile.amazon.com"+container.select_one('.a-link-normal')['href']
        products.append(product)



    print(products[:5])


# returns product dictionary
def getProduct(name, price, url): 
    pass



if __name__ == "__main__":
    scrapeAmazon("Playstation 5")
