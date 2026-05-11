export interface Metric {
  label: string;
  value: string;
  subValue?: string;
  trend?: 'up' | 'down' | 'neutral';
  wikiLink?: string;
}

export interface InsightCard {
  title: string;
  content: string;
  source: string;
  wikiLink?: string;
}

export interface RevenueSegment {
  label: string;
  value: number; // percentage of total
  amount?: string;
  yoy?: string;
  trend?: 'up' | 'down' | 'neutral';
  wikiLink?: string;
}

export interface SegmentOutlook {
  label: string;
  expectation: 'up' | 'down' | 'neutral';
  description: string;
  wikiLink?: string;
}

export interface QuarterData {
  metrics: Metric[];
  revenueSegments: RevenueSegment[];
  segmentOutlooks: SegmentOutlook[];
  growthEngines: InsightCard[];
  strategicTrends: InsightCard[];
  outlook: Metric[];
}

export interface CompanyData {
  name: string;
  ticker: string;
  color: string;
  years: {
    [year: string]: {
      [quarter: string]: QuarterData;
    };
  };
}

export const wikiData: { [ticker: string]: CompanyData } = {
  "2454": {
    name: "聯發科技",
    ticker: "2454",
    color: "#e65100",
    years: {
      "2026": {
        "Q1": {
          metrics: [
            { label: "合併營收", value: "NT$ 1,491.5 億", subValue: "季減 0.7%, 年減 2.7%", trend: "down", wikiLink: "mediatek-2454-financial-report-1q26" },
            { label: "毛利率", value: "46.3%", subValue: "季增 0.2%, 年減 1.8%", trend: "up", wikiLink: "mediatek-2454-financial-report-1q26" },
            { label: "營業利益", value: "NT$ 228.9 億", subValue: "季增 4.8%, 年減 23.8%", trend: "up", wikiLink: "mediatek-2454-financial-report-1q26" },
            { label: "每股盈餘 (EPS)", value: "NT$ 15.17", subValue: "季增 5.4%, 年減 17.7%", trend: "up", wikiLink: "mediatek-2454-financial-report-1q26" }
          ],
          revenueSegments: [
            { label: "手機 (Mobile Phone)", value: 49, amount: "NT$ 731 億", yoy: "-15%", trend: "down", wikiLink: "mediatek-2454-mobile-phone-segment" },
            { label: "智慧裝置平台 (Smart Edge)", value: 46, amount: "NT$ 686 億", yoy: "+13%", trend: "up", wikiLink: "mediatek-2454-financial-report-1q26" },
            { label: "電源管理 IC (Power IC)", value: 5, amount: "NT$ 75 億", yoy: "+11%", trend: "up", wikiLink: "mediatek-2454-financial-report-1q26" }
          ],
          segmentOutlooks: [
            { label: "手機 (Mobile)", expectation: 'down', description: "短期受 DRAM 成本影響，預期 2Q 持續季減。", wikiLink: "mediatek-2454-mobile-phone-segment" },
            { label: "智慧裝置 (Smart Edge)", expectation: 'up', description: "包含連網、AI PC、ASIC 等。4Q 將因 ASIC 入帳大爆發。", wikiLink: "mediatek-2454-ai-asic" },
            { label: "電源管理 (Power IC)", expectation: 'neutral', description: "各式電子設備電源管理。預期 2Q 表現持平。", wikiLink: "mediatek-2454-financial-report-1q26" }
          ],
          growthEngines: [
            { title: "AI ASIC 雲端佈局", content: "與美國雲端巨擘合作。預計 4Q26 單季貢獻約 NT$ 632 億營收。", source: "聯發科_說明會逐字稿.pdf", wikiLink: "mediatek-2454-ai-asic" },
            { title: "CPO 共同封裝光學", content: "投資 Ayar Labs 約 NT$ 28.5 億。預計 2028-2029 年成為數據中心標配。", source: "聯發科_說明會逐字稿.pdf", wikiLink: "mediatek-2454-co-packaged-optics" }
          ],
          strategicTrends: [
            { title: "Agentic AI (代理型 AI)", content: "執行長視其為產業轉折點。將帶動雲端及邊緣裝置的架構變革。", source: "聯發科_說明會逐字稿.pdf", wikiLink: "agentic-ai" },
            { title: "2nm 先進製程邁進", content: "首款 2nm 旗艦 SoC 預計於 3Q26 末上市，有望帶動下半年成長動能。", source: "聯發科_說明會逐字稿.pdf", wikiLink: "mediatek-2454-mobile-phone-segment" }
          ],
          outlook: [
            { label: "2Q26 預期營收", value: "NT$ 1,402億 ~ 1,492億", subValue: "季平至衰退 6%", trend: "neutral", wikiLink: "mediatek-2454-financial-report-1q26" },
            { label: "4Q26 ASIC 營收目標", value: "約 NT$ 632.4 億", subValue: "20 億美金 (匯率 31.62)", trend: "up", wikiLink: "mediatek-2454-ai-asic" },
            { label: "2026 全年營收成長", value: "中高個位數百分比 (美金計價)", trend: "up", wikiLink: "mediatek-2454-financial-report-1q26" }
          ]
        }
      }
    }
  },
  "2330": {
    name: "台積電",
    ticker: "2330",
    color: "#D32F2F",
    years: {
      "2026": {
        "Q1": {
          metrics: [
            { label: "合併營收", value: "NT$ 1 兆 1,341 億", subValue: "季增 8.4%, 年增 35.1%", trend: "up", wikiLink: "tsmc-2330-financial-report-1q26" },
            { label: "毛利率", value: "66.2%", subValue: "季增 3.9 ppts, 年增 7.4 ppts", trend: "up", wikiLink: "tsmc-2330-financial-report-1q26" },
            { label: "營業利益率", value: "58.1%", subValue: "季增 4.1 ppts", trend: "up", wikiLink: "tsmc-2330-financial-report-1q26" },
            { label: "每股盈餘 (EPS)", value: "NT$ 22.08", subValue: "季增 13.2%, 年增 58.3%", trend: "up", wikiLink: "tsmc-2330-financial-report-1q26" }
          ],
          revenueSegments: [
            { label: "高效能運算 (HPC)", value: 61, amount: "NT$ 6,918 億", yoy: "NM", trend: "up", wikiLink: "tsmc-2330-ai-hpc-platform" },
            { label: "智慧型手機 (Smartphone)", value: 26, amount: "NT$ 2,949 億", yoy: "NM", trend: "down", wikiLink: "tsmc-2330-financial-report-1q26" },
            { label: "其他 (IoT/Auto/etc)", value: 13, amount: "NT$ 1,474 億", yoy: "NM", trend: "neutral", wikiLink: "tsmc-2330-financial-report-1q26" }
          ],
          segmentOutlooks: [
            { label: "高效能運算 (HPC)", expectation: 'up', description: "AI 需求極度強勁，預期持續為成長主軸。", wikiLink: "tsmc-2330-ai-hpc-platform" },
            { label: "智慧型手機 (Smartphone)", expectation: 'neutral', description: "進入季節性庫存調整，預期緩步復甦。", wikiLink: "tsmc-2330-financial-report-1q26" },
            { label: "2nm (N2) 進度", expectation: 'neutral', description: "已量產，2H26 產能爬坡對毛利有 2-3% 稀釋影響。", wikiLink: "tsmc-2330-advanced-nodes" }
          ],
          growthEngines: [
            { title: "HPC AI 需求爆發", content: "AI 需求從生成式轉向代理型 (Agentic AI)，運算量進一步跳升。", source: "台積電_TSMC 1Q26 Transcript.pdf", wikiLink: "tsmc-2330-ai-hpc-platform" },
            { title: "CoWoS 產能擴張", content: "需求遠超供給，積極擴產並與 OSAT 夥伴合作解決瓶頸。", source: "台積電_TSMC 1Q26 Transcript.pdf", wikiLink: "tsmc-2330-advanced-packaging-cowos" }
          ],
          strategicTrends: [
            { title: "Agentic AI 轉折點", content: "運算模式從查詢轉向指令與行動，對先進製程需求產生質變。", source: "台積電_TSMC 1Q26 Transcript.pdf", wikiLink: "agentic-ai" },
            { title: "次世代 A14 時程", content: "開發進度如期，預計 2028 年量產，維持技術絕對領先。", source: "台積電_1Q26 Presentation (C).pdf", wikiLink: "tsmc-2330-advanced-nodes" }
          ],
          outlook: [
            { label: "2Q26 預期營收", value: "390億 ~ 402億 (USD)", subValue: "約 NT$ 1.23兆 ~ 1.27兆", trend: "up", wikiLink: "tsmc-2330-financial-report-1q26" },
            { label: "2026 資本支出", value: "520億 ~ 560億 (USD)", subValue: "維持歷史高位區間", trend: "up", wikiLink: "tsmc-2330-financial-report-1q26" },
            { label: "全年美金營收目標", value: "成長 > 30%", trend: "up", wikiLink: "tsmc-2330-financial-report-1q26" }
          ]
        }
      }
    }
  },
  "3189": {
    name: "景碩科技",
    ticker: "3189",
    color: "#0288D1",
    years: {
      "2025": {
        "Q4": {
          metrics: [
            { label: "2025 全年營收", value: "NT$ 393.5 億", subValue: "年增 28.9%", trend: "up", wikiLink: "kinsus-3189-financial-report-2025" },
            { label: "2025 全年毛利", value: "21.1%", subValue: "較 2024 (28.3%) 下滑", trend: "down", wikiLink: "kinsus-3189-financial-report-2025" },
            { label: "營業利益", value: "NT$ 26.7 億", subValue: "獲利狀況顯著回升", trend: "up", wikiLink: "kinsus-3189-financial-report-2025" },
            { label: "每股盈餘 (EPS)", value: "NT$ 3.51", subValue: "2024 年僅 0.11 元", trend: "up", wikiLink: "kinsus-3189-financial-report-2025" }
          ],
          revenueSegments: [
            { label: "載板部門 (Substrate)", value: 82, amount: "NT$ 323 億", yoy: "+37%", trend: "up", wikiLink: "kinsus-3189-substrate-segment" },
            { label: "光學部門 (Optics)", value: 18, amount: "NT$ 70 億", yoy: "+3%", trend: "up", wikiLink: "pegavision-6491" }
          ],
          segmentOutlooks: [
            { label: "載板市場地位", expectation: 'up', description: "全球 BGA 載板主要供應商，隨半導體庫存調整結束，獲利動能轉強。", wikiLink: "kinsus-3189-substrate-segment" },
            { label: "光學子公司貢獻", expectation: 'up', description: "晶碩光學貢獻集團 60% 以上部門利益，具備高獲利與防禦性。", wikiLink: "pegavision-6491" },
            { label: "資本支出規劃", expectation: 'neutral', description: "2025 年支出約 3.5 億，用於維持技術競爭力與設備更新。", wikiLink: "kinsus-3189-financial-report-2025" }
          ],
          growthEngines: [
            { title: "晶碩獲利引擎", content: "子公司晶碩光學獲利能力強勁，是集團最穩定的現金流來源。", source: "景碩_114Q4.pdf", wikiLink: "pegavision-6491" },
            { title: "載板需求復甦", content: "HPC 與消費電子需求回溫，帶動 BGA 載板稼動率提升。", source: "景碩_114Q4.pdf", wikiLink: "kinsus-3189-substrate-segment" }
          ],
          strategicTrends: [
            { title: "載板競爭加劇", content: "產業擴產導致價格競爭，短期毛利率回升至歷史高點仍需時間。", source: "景碩_114Q4.pdf", wikiLink: "kinsus-3189-substrate-segment" },
            { title: "雙軌營運策略", content: "電子載板與醫療器材並進，提升集團整體抗風險能力。", source: "景碩_114Q4.pdf", wikiLink: "kinsus-3189" }
          ],
          outlook: [
            { label: "現金股利", value: "每股 1.75 元", trend: "neutral", wikiLink: "kinsus-3189-financial-report-2025" },
            { label: "部門利益結構", value: "光學貢獻 > 載板", subValue: "獲利重心轉移至子公司", trend: "up", wikiLink: "kinsus-3189-financial-report-2025" }
          ]
        }
      }
    }
  }
};
