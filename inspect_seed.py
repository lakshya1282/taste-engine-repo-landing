import urllib.request
import re
import json

url = "https://www.agrumeafarm.it/"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})

with urllib.request.urlopen(req) as resp:
    html = resp.read().decode("utf-8", errors="ignore")

with open("design/refs/seed/page.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Saved page.html, size:", len(html))

# Find CSS
css_links = re.findall(r'<link[^>]+rel=["\']stylesheet["\'][^>]+href=["\']([^"\']+)["\']', html)
if not css_links:
    css_links = re.findall(r'<link[^>]+href=["\']([^"\']+\.css[^"\']*)["\']', html)
print("CSS links:", css_links)

# Fetch first 2 CSS stylesheets to inspect colors, fonts, motion
css_content = ""
for link in css_links[:3]:
    css_url = link if link.startswith("http") else "https://www.agrumeafarm.it" + link
    print("Fetching CSS:", css_url)
    try:
        req_css = urllib.request.Request(css_url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req_css) as cresp:
            data = cresp.read().decode("utf-8", errors="ignore")
            css_content += "\n" + data
    except Exception as e:
        print("CSS fetch error:", e)

with open("design/refs/seed/styles.css", "w", encoding="utf-8") as f:
    f.write(css_content)

# Extract script sources
scripts = re.findall(r'<script[^>]+src=["\']([^"\']+)["\']', html)
print("Scripts:", scripts[:8])

# Extract all css
all_css = re.findall(r'href=["\']([^"\']+\.css[^"\']*)["\']', html)
print("All CSS hrefs:", all_css)

# Extract inline styles and vars
css_vars = re.findall(r'--[a-zA-Z0-9_-]+:[^;\}]+', html)
print("Inline CSS vars count:", len(css_vars))
print("Sample vars:", css_vars[:15])

# Fetch entry css files
for c in all_css:
    if '_nuxt/' in c:
        curl = "https://www.agrumeafarm.it" + c if not c.startswith("http") else c
        try:
            r = urllib.request.Request(curl, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(r) as cr:
                txt = cr.read().decode("utf-8", errors="ignore")
                with open("design/refs/seed/" + c.split("/")[-1], "w", encoding="utf-8") as out:
                    out.write(txt)
                print("Downloaded", c.split("/")[-1], "size:", len(txt))
                # look for hex colors in this css
                hexes = re.findall(r'#[0-9a-fA-F]{3,8}', txt)
                print("Hexes in nuxt css:", set(hexes[:15]))
                eas = re.findall(r'cubic-bezier\([^\)]+\)', txt)
                print("Easings in nuxt css:", set(eas))
        except Exception as e:
            print("Failed fetching nuxt css:", e)

