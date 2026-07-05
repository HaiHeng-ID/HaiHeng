/**
 * 海亨贸易 · 多语言引擎
 * 中文(zh) | English(en) | Bahasa Indonesia(id)
 */

var I18N = {
  current: "zh", // 默认中文

  dict: {
    zh: {
      // Header
      headerTitle: "🏭 海亨贸易 · 不锈钢厨具",
      headerTagline: "Made in China · 专供印尼市场",
      // Stats
      statSKU: "产品 SKU",
      statSeries: "产品系列",
      stat304: "304 款",
      stat201: "201 款",
      // Nav
      navQuick: "快捷导航",
      // Detail panel
      detailUnitPrice: "单价",
      detailMaterial: "材质",
      detailPacking: "装箱",
      detailSeries: "系列",
      detailStainless: "不锈钢",
      detailPcsUnit: "pcs/件",
      // Contact
      contactTitle: "📞 联系我们",
      contactLabel: "WhatsApp 询盘",
      // Footer
      footerText: "© 2026 海亨贸易 HAIHENG TRADING · 印尼专供不锈钢厨具",
      footerContact: "WhatsApp 询盘 · MOQ 可谈 · 支持混批",
      // Language labels
      langZh: "中文",
      langEn: "English",
      langId: "Bahasa"
    },

    en: {
      headerTitle: "🏭 HAIHENG TRADING · Stainless Steel Kitchenware",
      headerTagline: "Made in China · For Indonesian Market",
      statSKU: "SKU",
      statSeries: "Series",
      stat304: "304 Items",
      stat201: "201 Items",
      navQuick: "Quick Nav",
      detailUnitPrice: "Unit Price",
      detailMaterial: "Material",
      detailPacking: "Packing",
      detailSeries: "Series",
      detailStainless: "Stainless Steel",
      detailPcsUnit: "pcs/ctn",
      contactTitle: "📞 Contact Us",
      contactLabel: "WhatsApp Inquiry",
      footerText: "© 2026 HAIHENG TRADING · Indonesian Stainless Steel Kitchenware",
      footerContact: "WhatsApp · MOQ Negotiable · Mixed Wholesale",
      langZh: "中文",
      langEn: "English",
      langId: "Bahasa"
    },

    id: {
      headerTitle: "🏭 HAIHENG TRADING · Peralatan Dapur Stainless Steel",
      headerTagline: "Made in China · Khusus Pasar Indonesia",
      statSKU: "SKU Produk",
      statSeries: "Seri Produk",
      stat304: "Item 304",
      stat201: "Item 201",
      navQuick: "Navigasi",
      detailUnitPrice: "Harga Satuan",
      detailMaterial: "Bahan",
      detailPacking: "Kemasan",
      detailSeries: "Seri",
      detailStainless: "Stainless Steel",
      detailPcsUnit: "pcs/karton",
      contactTitle: "📞 Hubungi Kami",
      contactLabel: "WhatsApp",
      footerText: "© 2026 HAIHENG TRADING · Peralatan Dapur Stainless Steel Indonesia",
      footerContact: "WhatsApp · MOQ Bisa Nego · Campuran Grosir Tersedia",
      langZh: "中文",
      langEn: "English",
      langId: "Bahasa"
    }
  },

  // ---- 公共 API ----
  /** 翻译 UI 固定文案 */
  t: function(key) {
    var lang = this.current;
    var d = this.dict[lang];
    if (d && d[key] !== undefined) return d[key];
    // fallback to zh
    if (this.dict.zh[key] !== undefined) return this.dict.zh[key];
    return key;
  },

  /** 切换语言并重新渲染 */
  switchTo: function(lang) {
    this.current = lang;
    renderAll();
    // 存到 localStorage
    try { localStorage.setItem("haigeng_lang", lang); } catch(e) {}
  },

  /** 取产品名 */
  productName: function(p) {
    if (this.current === "en" && p.name_en) return p.name_en;
    if (this.current === "id" && p.name_id) return p.name_id;
    return p.name;
  },

  /** 取系列名 */
  seriesName: function(s) {
    if (this.current === "en" && s.name_en) return s.name_en;
    if (this.current === "id" && s.name_id) return s.name_id;
    return s.name;
  },

  /** 取系列描述 */
  seriesDesc: function(s) {
    if (this.current === "en" && s.desc_en) return s.desc_en;
    if (this.current === "id" && s.desc_id) return s.desc_id;
    return s.desc || "";
  },

  /** 取品牌信息 */
  brandTagline: function() {
    if (this.current === "en") return CATALOG.brand.taglineEn;
    if (this.current === "id" && CATALOG.brand.taglineId) return CATALOG.brand.taglineId;
    return CATALOG.brand.tagline;
  },

  brandFooter: function() {
    if (this.current === "en") return "© 2026 HAIHENG TRADING · Indonesian Stainless Steel Kitchenware";
    if (this.current === "id") return "© 2026 HAIHENG TRADING · Peralatan Dapur Stainless Steel Indonesia";
    return CATALOG.brand.footer;
  },

  brandContact: function() {
    return "📞 " + this.t("contactLabel");
  },

  /** 初始化：读取上次保存的语言 */
  init: function() {
    try {
      var saved = localStorage.getItem("haigeng_lang");
      if (saved && this.dict[saved]) this.current = saved;
    } catch(e) {}
  }
};
