# Özdemir İrican · Sakarya Klima ve Kombi Servisi

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

Sakarya'da klima, kombi, petek temizliği ve tesisat hizmetlerini tanıtan servis odaklı kurumsal web arayüzü.

## Özellikler

- Klima servisi, kombi servisi, petek temizliği ve tesisat detay sayfaları.
- Hizmet bazlı telefon ve WhatsApp iletişimi.
- Mobil gezinme ve servis talebi mesajına yönlendiren arayüz etkileşimleri.
- Yerel işletme yapılandırılmış verileri, sitemap ve sosyal paylaşım meta bilgileri.

## Yerel önizleme

Build adımı veya npm bağımlılığı yoktur. Python 3 ile proje klasöründen:

```sh
git clone https://github.com/Erkan54/ozdemir_irican.git
cd ozdemir_irican
python -m http.server 8000
```

Tarayıcıda `http://localhost:8000` adresini açın. Bu komut yalnızca statik dosyaları sunar; veritabanı veya özel backend başlatmaz.

## Dosya haritası

| Dosya / klasör | İşlev |
| --- | --- |
| `index.html` | Ana sayfa |
| `klima-servisi.html / kombi-servisi.html` | İklimlendirme hizmetleri |
| `petek-temizligi.html / tesisat.html` | Diğer servis sayfaları |
| `iletisim.html` | İletişim ekranı |
| `js/main.js` | WhatsApp/telefon yönlendirmeleri |
| `css/ / assets/` | Stil ve görseller |

## Yapılandırma ve yayın

Telefon/WhatsApp bilgilerini ve `js/main.js` içindeki iletişim numarasını birlikte güncelleyin. HTML içindeki adres, işletme şeması ve `sakaryaklimakombi.com` canonical/meta URL'leri yayımlayacağınız işletmeyle tutarlı olmalıdır. Talep ekranı WhatsApp yönlendirmesidir; sunucuda iş emri veya rezervasyon oluşturmaz.

Dosyalar statik barındırmaya uygundur. Yayından önce mobil menü, göreli dosya yolları, iletişim bağlantıları ve kullanılan dış kaynakları tarayıcıda kontrol edin. Otomatik uygulama test paketi bu depoda tanımlı değildir.
