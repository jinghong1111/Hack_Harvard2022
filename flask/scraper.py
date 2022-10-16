from bs4 import BeautifulSoup
import urllib.parse, requests, json

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
    try:
        for container in productContainers:
            product = {}
            product['name'] = container.select_one("span.a-size-medium.a-color-base.a-text-normal").text
            product['price'] = container.select_one("span.a-offscreen").text
            product['image'] = container.select_one('img.s-image')['src']
            product['link'] = "https://smile.amazon.com"+container.select_one('.a-link-normal')['href']
            products.append(product)
    except:
            print("error: product:", product)   


    print(products[:5])
    return products

# container="li.s-item.s-item__pl-on-bottom.s-item--watch-at-corner"
def scrapeEbay(product):
    url = "https://www.ebay.com/sch/i.html?_from=R40&_nkw="+urllib.parse.quote(product)+"&_sacat=0&rt=nc&LH_BIN=1"
    webpage = requests.get(url, headers=HEADERS)
    soup = BeautifulSoup(webpage.content, "lxml")
    productContainers = soup.select("li.s-item.s-item__pl-on-bottom.s-item--watch-at-corner")
    print(str(len(productContainers)) + " items found")
    products = []
    for container in productContainers:
        try:
            product = {}
            product['name'] = container.select_one("span[role=\"heading\"]").text
            product['price'] = container.select_one(".s-item__price").text
            product['image'] = container.select_one('img.s-item__image-img')['src']
            product['link'] = container.select_one('.s-item__link')['href']
            products.append(product)
        except:
            print("error: product:", product)

    # print(products[:5])
    return products


#"mb1 ph1 pa0-xl bb b--near-white w-25"

def scrapeWalmart(product):
    url = "https://www.walmart.com/search?q="+urllib.parse.quote(product)
    webpage = requests.get(url, headers=HEADERS)
    soup = BeautifulSoup(webpage.content, "lxml")
    productContainers = soup.select(".mb1.ph1.pa0-xl.bb.b--near-white.w-25")
    print(str(len(productContainers)) + " items found")
    products = []
    for container in productContainers:
        try:
            product = {}
            product['name'] = container.select_one(".normal.dark-gray.mb0.mt1.lh-title.f6.f5-l").text
            product['price'] = container.select_one(".mr1.mr2-xl.lh-copy").text
            product['image'] = container.select_one('img')['src']
            product['link'] = container.select_one('a')['href']
            products.append(product)
        except:
            print("error: product:", product)
    # print(products[:5])
    return products

# scrapes all 3 and returns JSON object
def getData(product_name):
    results = json.dumps({'amazon':scrapeAmazon(product_name),
            'ebay': scrapeEbay(product_name),
            'walmart':scrapeWalmart(product_name)})
    print(results)
    return results


if __name__ == "__main__":
    potato = getData("Playstation 5")