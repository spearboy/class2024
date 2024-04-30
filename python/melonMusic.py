import requests as req
from bs4 import BeautifulSoup as bs
import pandas as pd
head = {'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'}
res = req.get("https://www.melon.com/chart/index.htm",headers=head)

# print(res.text)
# print(res.status_code)

soup = bs(res.text, "lxml")
# print(soup)

ranking = soup.select("tbody .rank")
title = soup.select(".wrap_song_info > .rank01 > span > a")
artist = soup.select(".wrap_song_info > .rank02 > span > a:nth-child(1)")

# print(len(ranking))
# print(len(title))
# print(len(artist))
# print(ranking)
# print(title)
# print(artist)
rankingList = [r.text.strip() for r in ranking]
titleList = [t.text.strip() for t in title]
artistList = [a.text.strip() for a  in artist]

chart_df = pd.DataFrame({
    'Ranking' : rankingList,
    'Title' : titleList,
    'Artist' : artistList
})

chart_df.to_json("melonChart100.json", force_ascii=False, orient="records")