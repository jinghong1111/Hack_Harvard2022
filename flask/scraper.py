from bs4 import BeautifulSoup
import urllib.parse, requests, json
from bs4.dammit import EncodingDetector
from fake_useragent import UserAgent
ua = UserAgent()
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
    if (len(productContainers)) == 0:
        print(soup)
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


    # print(products[:5])
    return products

# container="li.s-item.s-item__pl-on-bottom.s-item--watch-at-corner"
def scrapeEbay(product):
    url = "https://www.ebay.com/sch/i.html?_from=R40&_nkw="+urllib.parse.quote(product)+"&_sacat=0&rt=nc&LH_BIN=1"
    webpage = requests.get(url, headers={'User-Agent':str(ua.chrome)})
    http_encoding = webpage.encoding if 'charset' in webpage.headers.get('content-type', '').lower() else None
    html_encoding = EncodingDetector.find_declared_encoding(webpage.content, is_html=True)
    encoding = html_encoding or http_encoding
    soup = BeautifulSoup(webpage.content, "lxml", from_encoding=encoding)
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
    webpage = requests.get(url, headers={'User-Agent':str(ua.chrome)})
    soup = BeautifulSoup(webpage.content, "lxml")
    productContainers = soup.select(".mb1.ph1.pa0-xl.bb")
    if (len(productContainers)) == 0:
        print(soup)
    print(str(len(productContainers)) + " items found")
    products = []
    for container in productContainers:
        try:
            product = {}
            product['name'] = container.select_one(".normal.dark-gray.mb0.mt1.lh-title.f6.f5-l").text
            product['price'] = container.select_one(".mr1.mr2-xl.lh-copy").text
            product['image'] = container.select_one('img')['src']
            product['link'] = "walmart.com"+container.select_one('a')['href']
            products.append(product)
        except Exception as e:
            print("exception: "+str(e))
            print("error: product:", product)
    # print(products[:5])
    return products

# def scrapeTarget(product):
#     session = HTMLSession()
#     url = "https://www.target.com/s?searchTerm="+urllib.parse.quote(product)
#     webpage = session.get(url, headers=HEADERS)
#     soup = BeautifulSoup(webpage.content, "lxml")
#     productContainers = soup.select(".styles__StyledCol-sc-fw90uk-0.dNNWBw")
#     if (len(productContainers)) == 0:
#         print(soup)
#     print(str(len(productContainers)) + " items found")
#     products = []
#     for container in productContainers:
#         print(container)
#         try:
#             product = {}
#             product['name'] = container.select_one("a").text
#             product['price'] = container.select_one("span[data-test=\"current-price\"]").text
#             product['image'] = container.select_one('source')['srcset']
#             product['link'] = "target.com"+container.select_one('a')['href']
#             products.append(product)
#         except Exception as e:
#             print("exception: "+str(e))
#             print("error: product:", product)
#     # print(products[:5])
#     return products

def scrapeCVS(product):
    url = "https://www.cvs.com/search?searchTerm="+urllib.parse.quote(product)+"&refinements%5B0%5D%5BnavigationName%5D=variants.subVariant.gbi_PICKUP_DELIVERY&refinements%5B0%5D%5Bvalue%5D=Delivery"
    webpage = requests.get(url, headers={'User-Agent':str(ua.chrome)})
    soup = BeautifulSoup(webpage.content, "lxml")
    productContainers = soup.select(".css-1dbjc4n.r-14lw9ot.r-1lz4bg0.r-rs99b7.r-1pi2tsx.r-1udh08x.r-xd6kpl.r-1j3t67a.r-13qz1uu")
    if (len(productContainers)) == 0:
        print(soup)
    print(str(len(productContainers)) + " items found")
    products = []
    for container in productContainers:
        # print(container)
        try:
            product = {}
            product['name'] = container.select_one(".css-901oao.css-cens5h.r-1khnkhu.r-1jn44m2.r-ubezar.r-29m4ib.r-rjixqe.r-kc8jnq.r-fdjqy7.r-13qz1uu").text
            product['price'] = container.select_one(".css-901oao.r-1jn44m2.r-evnaw.r-b88u0q.r-135wba7").text
            product['image'] = container.select_one('img')['src']
            product['link'] = "cvs.com"+container.select_one('a')['href']
            products.append(product)
        except Exception as e:
            print("exception: "+str(e))
            print("error: product:", product)
    # print(products[:5])
    return products

# scrapes all 3 and returns JSON object
def getData(product_name):
    results = json.dumps({
            'amazon':scrapeAmazon(product_name),
            'ebay': scrapeEbay(product_name),
            'walmart':scrapeWalmart(product_name),
            # 'target':scrapeTarget(product_name)
            'cvs':scrapeCVS(product_name),
            })
    print("\n\n\n\n\n\n\n\n\n\n\n\n")
    print(results)
    return results


if __name__ == "__main__":
    potato = scrapeCVS("Shampoo")
    print(potato[:3])