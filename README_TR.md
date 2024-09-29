# DiscordGuilder

[Click here for English guide](README.md)

**ÖNEMLİ**: Bu proje halen geliştirme aşamasındadır!

DiscordGuilder ile hayalinizdeki Discord sunucusunu zahmetsizce oluşturun! Bu esprili bot, YAML büyüleriyle kategoriler, kanallar ve roller yaratır!

## Kullanım Kılavuzu

### Ön Koşullar

1. Node.js (v18 veya daha yüksek) - [İndir](https://nodejs.org/)
2. pnpm - [Kurulum Kılavuzu](https://pnpm.io/installation)
3. Git - [İndir](https://git-scm.com/downloads)
4. Bir Discord hesabı ve yönetici izinlerinizin olduğu bir Discord sunucusu
5. Bir Discord bot tokeni (Discord Geliştirici Portalı'nda bir bot oluşturmanız gerekecek)

### Kurulum

1. Depoyu klonlayın:
   ```
   git clone https://github.com/unitythemaker/DiscordGuilder.git
   cd DiscordGuilder
   ```

2. Bağımlılıkları pnpm kullanarak yükleyin:
   ```
   pnpm install
   ```

3. `.env.example` dosyasını `.env` olarak kopyalayın:
   ```
   # Linux/MacOS
   cp src/.env.example .env
   # Windows
   copy src\.env.example .env
   ```

4. `src/.env` dosyasını düzenleyin ve Discord bot tokeninizi ekleyin:
   ```
   DISCORD_TOKEN=discord_bot_tokeniniz_buraya
   ```

5. Botu Discord sunucunuza, Discord Geliştirici Portalı'nda oluşturulan OAuth2 URL'sini kullanarak davet edin. Gerekli izinleri verdiğinizden emin olun (tam işlevsellik için Yönetici önerilir).

### Sunucunuzu Yapılandırma

1. `src/prompts.txt` dosyasını bir metin düzenleyicide açın.

2. "Prompt 1" içeriğini kopyalayın ve bir AI asistanı ile (örneğin ChatGPT) konuşmaya yapıştırın. Oluşturmak istediğiniz sunucu türünü tanımlamak için talimatları izleyin.

3. Sunucunuzu tanımlamayı bitirdiğinizde, AI size bir "User_Prompt_Server_Type" ve bir "User_Prompt" sağlayacaktır.

4. `prompts.txt` dosyasından "Prompt 2" içeriğini kopyalayın ve AI asistanı ile yeni bir konuşmaya yapıştırın. "User_Prompt_Server_Type" ve "User_Prompt" yer tutucularını bir önceki adımda aldığınız değerlerle değiştirin.

5. AI, sunucunuz için bir YAML yapılandırması oluşturacaktır. "### START OF OUTPUT ###" ve "### END OF OUTPUT ###" arasındaki tüm çıktıyı kopyalayın.

6. `src` dizininde `config.yml` adında yeni bir dosya oluşturun ve YAML yapılandırmasını buraya yapıştırın.

### Botu Çalıştırma

1. Botu pnpm kullanarak başlatın:
   ```
   pnpm start
   ```

2. Bot çalışır durumda ve sunucunuza bağlandığında, botun erişimi olan herhangi bir kanalda `!auto-generate` komutunu kullanın. Bu, yapılandırmanıza göre kategorilerin, kanalların ve rollerin otomatik olarak oluşturulmasını tetikleyecektir.

### Notlar

- Bot, kanal, kategori ve rol oluşturmak için yönetici izinlerine ihtiyaç duyar.
- `!auto-generate` komutunu kullanırken dikkatli olun, çünkü yeni kanallar ve roller oluşturacaktır. Bu komutu yeni bir sunucuda veya minimal mevcut yapıya sahip bir sunucuda kullanmanız önerilir.
- Değişiklik yapmanız gerekirse, `config.yml` dosyasını düzenleyin ve `!auto-generate` komutunu tekrar çalıştırın. Bunun, zaten varsa çift kanal veya rol oluşturabileceğini unutmayın.

### Sorun Giderme

- Herhangi bir izin hatası ile karşılaşırsanız, botun doğru izinlerle davet edildiğinden ve sunucunuzda Yönetici rolüne sahip olduğundan emin olun.
- Kanallar veya roller oluşturulmuyorsa, sorunu gösterebilecek hata mesajları için konsol çıktısını kontrol edin.

Ek yardım için veya sorun bildirmek için lütfen [GitHub deposunu](https://github.com/unitythemaker/DiscordGuilder) ziyaret edin.
