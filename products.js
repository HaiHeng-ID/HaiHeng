/**
 * 海亨贸易 · 产品目录数据
 * 改价格、改名字、加产品、删产品——只改这个文件就行
 * 支持三语：中文(zh) | English(en) | Bahasa Indonesia(id)
 * name / name_en / name_id 三语产品名
 * desc / desc_en / desc_id 三语描述
 * 编辑完成后刷新浏览器看效果
 */

var CATALOG = {

  // ========== 品牌信息 ==========
  brand: {
    name: "海亨贸易",
    name_en: "HAIHENG TRADING",
    tagline: "Made in China · 专供印尼市场",
    taglineEn: "Made in China · For Indonesian Market",
    taglineId: "Made in China · Khusus Pasar Indonesia",
    footer: "© 2026 海亨贸易 HAIHENG TRADING · 印尼专供不锈钢厨具",
    footerEn: "© 2026 HAIHENG TRADING · Indonesian Stainless Steel Kitchenware",
    footerId: "© 2026 HAIHENG TRADING · Peralatan Dapur Stainless Steel Indonesia",
    contact: "📞 WhatsApp 询盘 · MOQ 可谈 · 支持混批",
    contactEn: "📞 WhatsApp · MOQ Negotiable · Mixed Wholesale",
    contactId: "📞 WhatsApp · MOQ Bisa Nego · Campuran Grosir Tersedia"
  },

  // ========== 系列定义 ==========
  // name 中文名, name_en 英文, name_id 印尼语
  // desc 中文描述, desc_en 英文, desc_id 印尼语
  // ⚠️ 以下翻译为 AI 自动生成，请人工校对后再正式使用
  series: [
    {
      id: "jiale",
      name: "佳乐系列",
      name_en: "Jiale Children's Spoons",
      name_id: "Sendok Anak Seri Jiale",
      icon: "🍼",
      material: "201",
      badge: "201",
      desc: "全系列6款，专为儿童设计的餐具勺。装箱：300pcs/件（150pcs×2内箱），外箱42×24×42cm",
      desc_en: "6-piece complete series, designed for children. Packing: 300pcs/ctn (150pcs×2 inner boxes), outer carton 42×24×42cm",
      desc_id: "6 produk lengkap, sendok khusus anak-anak. Kemasan: 300pcs/karton (150pcs×2 kotak dalam), karton luar 42×24×42cm"
    },
    {
      id: "yuanmei",
      name: "圆美系列",
      name_en: "Yuanmei Wooden Handle",
      name_id: "Seri Yuanmei Gagang Kayu",
      icon: "🪵",
      material: "mixed",
      badge: "304+201",
      desc: "7款产品，4款304木柄铲勺 + 3款201漏勺",
      desc_en: "7 products: 4 × 304 wooden handle spatula/spoon + 3 × 201 strainer spoon",
      desc_id: "7 produk: 4 × 304 spatula/sendok gagang kayu + 3 × 201 sendok saring"
    },
    {
      id: "deya",
      name: "德雅系列",
      name_en: "Deya Full 304 Series",
      name_id: "Seri Deya Full 304",
      icon: "✨",
      material: "304",
      badge: "全 304",
      desc: "全304不锈钢，品质担当。装箱：80pcs/件（20pcs×4内箱），碗头激光打标304",
      desc_en: "All 304 stainless steel, premium quality. Packing: 80pcs/ctn (20pcs×4 inner boxes), bowl head laser-marked 304",
      desc_id: "Semua stainless steel 304, kualitas premium. Kemasan: 80pcs/karton (20pcs×4 kotak dalam), kepala mangkuk ditandai laser 304"
    },
    {
      id: "xiyun",
      name: "喜运系列",
      name_en: "Xiyun Triple-Rivet Series",
      name_id: "Seri Xiyun Tiga Paku Keling",
      icon: "🔩",
      material: "mixed",
      badge: "304+201",
      desc: "5款产品，独特的三钉铆接设计，更耐用。铲勺碗头激光304，方碗系列120pcs/件",
      desc_en: "5 products, unique triple-rivet design, more durable. Spatula/spoon head laser-marked 304, square bowl series 120pcs/ctn",
      desc_id: "5 produk, desain tiga paku keling unik, lebih tahan lama. Kepala spatula/sendok ditandai laser 304, seri mangkuk persegi 120pcs/karton"
    },
    {
      id: "yashun",
      name: "雅顺系列",
      name_en: "Yashun Square Bowl Series",
      name_id: "Seri Mangkuk Persegi Yashun",
      icon: "✔️",
      material: "304",
      badge: "全 304",
      desc: "2款全304方碗勺，性价比之选。装箱：120pcs/件（60pcs×2内箱），全系列最低价",
      desc_en: "2 full 304 square bowl spoons, best value choice. Packing: 120pcs/ctn (60pcs×2 inner boxes), lowest price in all series",
      desc_id: "2 sendok mangkuk persegi full 304, pilihan nilai terbaik. Kemasan: 120pcs/karton (60pcs×2 kotak dalam), harga terendah di semua seri"
    },
    {
      id: "zuanshi",
      name: "钻石棕系列",
      name_en: "Diamond Brown Series",
      name_id: "Seri Diamond Brown",
      icon: "💎",
      material: "201",
      badge: "201",
      desc: "单款大漏勺。装箱：80pcs/件（40pcs×2内箱），外箱45.5×36×54cm",
      desc_en: "Single large strainer spoon model. Packing: 80pcs/ctn (40pcs×2 inner boxes), outer carton 45.5×36×54cm",
      desc_id: "Satu model sendok saring besar. Kemasan: 80pcs/karton (40pcs×2 kotak dalam), karton luar 45.5×36×54cm"
    }
  ],

  // ========== 产品列表 ==========
  // name 中文, name_en 英文, name_id 印尼语
  // ⚠️ 以下翻译为 AI 自动生成，请人工校对后再正式使用
  products: [
    // ---- 佳乐系列 ----
    { sku: "1911-JLXHJS", name: "佳乐儿童小号尖勺", name_en: "Jiale Children's Small Pointed Spoon", name_id: "Sendok Runcing Kecil Anak Jiale", price: "8,400", material: "201", qty: 300, dim: "14.1 × 2.8 cm", weight: "19g", series: "佳乐系列" },
    { sku: "1904-JLXHYS", name: "佳乐儿童小号圆勺", name_en: "Jiale Children's Small Round Spoon", name_id: "Sendok Bulat Kecil Anak Jiale", price: "8,400", material: "201", qty: 300, dim: "14 × 3.4 cm", weight: "21g", series: "佳乐系列" },
    { sku: "1913-JLXHPDS", name: "佳乐儿童小号平底勺", name_en: "Jiale Children's Small Flat Spoon", name_id: "Sendok Datar Kecil Anak Jiale", price: "8,400", material: "201", qty: 300, dim: "14.4 × 3 cm", weight: "22g", series: "佳乐系列" },
    { sku: "1914-JLDHJS", name: "佳乐儿童大号尖勺", name_en: "Jiale Children's Large Pointed Spoon", name_id: "Sendok Runcing Besar Anak Jiale", price: "9,800", material: "201", qty: 300, dim: "18.2 × 4 cm", weight: "32g", series: "佳乐系列" },
    { sku: "1806-JLDHYS", name: "佳乐儿童大号圆勺", name_en: "Jiale Children's Large Round Spoon", name_id: "Sendok Bulat Besar Anak Jiale", price: "9,800", material: "201", qty: 300, dim: "17.5 × 4.5 cm", weight: "34g", series: "佳乐系列" },
    { sku: "1916-JLDHPDS", name: "佳乐儿童大号平底勺", name_en: "Jiale Children's Large Flat Spoon", name_id: "Sendok Datar Besar Anak Jiale", price: "9,800", material: "201", qty: 300, dim: "18.1 × 3.9 cm", weight: "35g", series: "佳乐系列" },

    // ---- 圆美系列 ----
    { sku: "1789-304YMC", name: "304圆美木柄10铲", name_en: "304 Yuanmei Wooden Handle 10\" Spatula", name_id: "Spatula Gagang Kayu 10\" Yuanmei 304", price: "38,080", material: "304", qty: 80, dim: "38.7 × 9.5 cm", weight: "181g", series: "圆美系列", label: "best" },
    { sku: "1790-304YMS", name: "304圆美木柄10勺", name_en: "304 Yuanmei Wooden Handle 10\" Spoon", name_id: "Sendok Gagang Kayu 10\" Yuanmei 304", price: "38,080", material: "304", qty: 80, dim: "35.5 × 9.4 cm", weight: "181g", series: "圆美系列", label: "best" },
    { sku: "1054-YMDC", name: "圆美木柄加深铲", name_en: "Yuanmei Wooden Handle Deep Spatula", name_id: "Spatula Dalam Gagang Kayu Yuanmei", price: "38,080", material: "304", qty: 60, dim: "42.5 × 10 cm", weight: "207g", series: "圆美系列", label: "best" },
    { sku: "1055-YMDS", name: "圆美木柄加深勺", name_en: "Yuanmei Wooden Handle Deep Spoon", name_id: "Sendok Dalam Gagang Kayu Yuanmei", price: "38,080", material: "304", qty: 60, dim: "42.3 × 10.7 cm", weight: "246g", series: "圆美系列", label: "best" },
    { sku: "1175-YMLS14CM", name: "圆美木柄14cm漏勺", name_en: "Yuanmei 14cm Strainer Spoon", name_id: "Sendok Saring 14cm Gagang Kayu Yuanmei", price: "47,600", material: "201", qty: 50, dim: "46 × 14 cm", weight: "266g", series: "圆美系列" },
    { sku: "1331-YMLS16CM", name: "圆美木柄16cm漏勺", name_en: "Yuanmei 16cm Strainer Spoon", name_id: "Sendok Saring 16cm Gagang Kayu Yuanmei", price: "50,400", material: "201", qty: 50, dim: "48.4 × 16 cm", weight: "322g", series: "圆美系列" },
    { sku: "1597-YMLS18CM", name: "圆美木柄18cm漏勺", name_en: "Yuanmei 18cm Strainer Spoon", name_id: "Sendok Saring 18cm Gagang Kayu Yuanmei", price: "53,200", material: "201", qty: 50, dim: "50.2 × 18 cm", weight: "379g", series: "圆美系列" },

    // ---- 德雅系列 ----
    { sku: "1645-304DYGYC", name: "304德雅木柄隔油铲", name_en: "304 Deya Oil-Separating Spatula", name_id: "Spatula Pemisah Minyak Gagang Kayu Deya 304", price: "39,200", material: "304", qty: 80, dim: "38.4 × 9.8 cm", weight: "190g", series: "德雅系列", label: "new" },
    { sku: "1579-304DYC", name: "304德雅木柄铲", name_en: "304 Deya Wooden Handle Spatula", name_id: "Spatula Gagang Kayu Deya 304", price: "39,200", material: "304", qty: 80, dim: "38.4 × 9.9 cm", weight: "210g", series: "德雅系列", label: "new" },
    { sku: "1580-304DYS", name: "304德雅木柄勺", name_en: "304 Deya Wooden Handle Spoon", name_id: "Sendok Gagang Kayu Deya 304", price: "39,200", material: "304", qty: 80, dim: "36.5 × 9.5 cm", weight: "217g", series: "德雅系列", label: "new" },
    { sku: "1646-304DYLS", name: "304德雅木柄10漏", name_en: "304 Deya 10\" Strainer Spoon", name_id: "Sendok Saring 10\" Gagang Kayu Deya 304", price: "39,200", material: "304", qty: 80, dim: "36.5 × 9.5 cm", weight: "212g", series: "德雅系列", label: "new" },

    // ---- 喜运系列 ----
    { sku: "1581-304XYC", name: "304三钉喜运木柄铲", name_en: "304 Xiyun 3-Rivet Spatula", name_id: "Spatula 3 Paku Keling Gagang Kayu Xiyun 304", price: "42,000", material: "304", qty: 80, dim: "39 × 9.8 cm", weight: "230g", series: "喜运系列" },
    { sku: "1582-304XYS", name: "304三钉喜运木柄勺", name_en: "304 Xiyun 3-Rivet Spoon", name_id: "Sendok 3 Paku Keling Gagang Kayu Xiyun 304", price: "42,000", material: "304", qty: 80, dim: "37.5 × 9.4 cm", weight: "231g", series: "喜运系列" },
    { sku: "1846-304XYFS", name: "304三钉喜运7公分方碗勺", name_en: "304 Xiyun 3-Rivet 7cm Square Bowl Spoon", name_id: "Sendok Mangkuk Persegi 7cm 3 Paku Keling Xiyun 304", price: "38,080", material: "304", qty: 120, dim: "31 × 7.4 cm", weight: "140g", series: "喜运系列", label: "new" },
    { sku: "1847-304XYFLS", name: "304三钉喜运7公分方碗漏勺", name_en: "304 Xiyun 3-Rivet 7cm Square Bowl Strainer", name_id: "Sendok Saring Mangkuk Persegi 7cm 3 Paku Keling Xiyun 304", price: "38,080", material: "304", qty: 120, dim: "31 × 7.4 cm", weight: "137g", series: "喜运系列", label: "new" },
    { sku: "1891-XYHJL", name: "喜运木柄花椒漏", name_en: "Xiyun Wooden Handle Strainer", name_id: "Sendok Saring Gagang Kayu Xiyun", price: "38,080", material: "201", qty: 80, dim: "36.8 × 13.3 cm", weight: "231g", series: "喜运系列" },

    // ---- 雅顺系列 ----
    { sku: "1545-304YSFS", name: "304雅顺7公分方碗勺", name_en: "304 Yashun 7cm Square Bowl Spoon", name_id: "Sendok Mangkuk Persegi 7cm Yashun 304", price: "32,480", material: "304", qty: 120, dim: "31 × 7.3 cm", weight: "109g", series: "雅顺系列" },
    { sku: "1544-304YSFLS", name: "304雅顺7公分方碗漏勺", name_en: "304 Yashun 7cm Square Bowl Strainer", name_id: "Sendok Saring Mangkuk Persegi 7cm Yashun 304", price: "32,480", material: "304", qty: 120, dim: "31 × 7.3 cm", weight: "107g", series: "雅顺系列" },

    // ---- 钻石棕系列 ----
    { sku: "H4154-ZSDLS14CM", name: "钻石棕木柄14cm大漏勺", name_en: "Diamond Brown 14cm Large Strainer", name_id: "Sendok Saring Besar 14cm Diamond Brown", price: "40,880", material: "201", qty: 80, dim: "39.5 × 14 cm", weight: "254g", series: "钻石棕系列" }
  ]

};
