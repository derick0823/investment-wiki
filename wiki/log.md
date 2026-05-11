# Wiki Log


記錄所有 Wiki 操作的日誌。
## 2026-05-09
- **來源**: `raw/景碩_114Q4.pdf`
- **操作**: 
    - 建立 [[kinsus-3189]] 公司主頁。
    - 建立 [[kinsus-3189-financial-report-2025]] 財報摘要頁。
    - 建立 [[kinsus-3189-substrate-segment]]、[[pegavision-6491]] 專題頁面。
    - 更新 [[index]] 索引。

- **來源**: `raw/台積電_1Q26 Presentation (C).pdf`, `raw/台積電_1Q26ManagementReport.pdf`, `raw/台積電_FS.pdf`, `raw/台積電_TSMC 1Q26 Transcript.pdf`
...

- **操作**: 
    - 建立 [[tsmc-2330]] 公司主頁。
    - 建立 [[tsmc-2330-financial-report-1q26]] 財報摘要頁。
    - 建立 [[tsmc-2330-advanced-nodes]]、[[tsmc-2330-ai-hpc-platform]]、[[tsmc-2330-advanced-packaging-cowos]] 專題頁面。
    - 更新 [[index]] 索引。

- **來源**: `raw/聯發科_[法說會資料]Q1營運報告.pdf`, `raw/聯發科_[法說會資料]Q1簡報資料.pdf`, `raw/聯發科_說明會逐字稿.pdf`, `raw/聯發科_財務報表.pdf`
- **操作**: 
    - 初始化 Wiki 目錄。
    - 建立 [[mediatek-2454]] 公司主頁。
    - 建立 [[mediatek-2454-financial-report-1q26]] 財報摘要頁。
    - 建立 [[mediatek-2454-ai-asic]]、[[agentic-ai]]、[[mediatek-2454-mobile-phone-segment]]、[[mediatek-2454-co-packaged-optics]] 專題頁面。
    - 建立 [[index]] 索引頁面。

## 2026-05-11
- **重大修正**: 修正聯發科 (2454) 數據誤植事件。
    - **問題**: 儀表板將聯發科 2026 全年營收成長誤標為「> 30%」（此為台積電數據）。
    - **修正**: 
        - 更新 [[mediatek-2454-financial-report-1q26]] 補足「2026 全年展望」區塊，明確記錄為「中高個位數百分比 (美金計價)」。
        - 修正 `index.html` 與 `dashboard/preview.html` 內的硬編碼錯誤數據。
        - 執行跨檔案校對，確保 Wiki 與儀表板數據同步。

- **操作**: 
    - 根據使用者要求，將所有公司相關 Wiki 頁面標準化，命名需包含「公司名稱」與「股票代號」。
    - 更新 `GEMINI.md` 規則手冊。
    - 更名檔案：
        - `financial-report-1q26.md` -> `financial-report-mediatek-2454-1q26.md`
        - `financial-report-kinsus-2025.md` -> `financial-report-kinsus-3189-2025.md`
        - `financial-report-tsmc-1q26.md` -> `financial-report-tsmc-2330-1q26.md`
        - `tsmc-advanced-nodes.md` -> `tsmc-2330-advanced-nodes.md`
        - `kinsus-substrate-segment.md` -> `kinsus-3189-substrate-segment.md`
    - 全域更新所有 Wiki 連結、索引與儀表板程式碼中的 `wikiLink` 引用。

- **操作**: 
    - 根據使用者要求，進一步優化命名規則：單一公司專業頁面必須以「公司名稱-股票代號」作為檔名前綴。
    - 更新 `GEMINI.md` 規則手冊。
    - 更名檔案 (調整前綴順序或補足前綴)：
        - `financial-report-mediatek-2454-1q26.md` -> `mediatek-2454-financial-report-1q26.md`
        - `financial-report-tsmc-2330-1q26.md` -> `tsmc-2330-financial-report-1q26.md`
        - `financial-report-kinsus-3189-2025.md` -> `kinsus-3189-financial-report-2025.md`
        - `advanced-packaging-cowos.md` -> `tsmc-2330-advanced-packaging-cowos.md`
        - `ai-hpc-platform.md` -> `tsmc-2330-ai-hpc-platform.md`
        - `mobile-phone-segment.md` -> `mediatek-2454-mobile-phone-segment.md`
    - 全域更新所有受影響的 Wiki 連結、目錄與程式碼。

- **操作**: 
    - 根據使用者要求，將所有涉及公司專業的專題頁面（如 `ai-asic`, `agentic-ai`, `co-packaged-optics`）統一加上「公司名稱-股票代號」前綴。
    - 修正儀表板 UX 問題：實作 URL 狀態同步 (URLSearchParams)，確保使用者從 Wiki 頁面點擊「返回」後，儀表板能維持原本選擇的公司與季度，不再跳回初始畫面。
    - 更新 `index.html`、`preview.html` 與 `Dashboard.tsx`。
    - 更新 `GEMINI.md` 命名規則。

