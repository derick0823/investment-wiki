import React, { useState, useMemo } from 'react';
import { wikiData, CompanyData, QuarterData } from '../data/wikiData';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
  const [selectedTicker, setSelectedTicker] = useState<string>("2454");
  const [selectedYear, setSelectedYear] = useState<string>("2026");
  const [selectedQuarter, setSelectedQuarter] = useState<string>("Q1");

  const company = useMemo(() => wikiData[selectedTicker], [selectedTicker]);
  
  const currentData: QuarterData | null = useMemo(() => {
    return company?.years[selectedYear]?.[selectedQuarter] || null;
  }, [company, selectedYear, selectedQuarter]);

  const tickers = Object.keys(wikiData);
  const years = company ? Object.keys(company.years) : [];
  const quarters = company && company.years[selectedYear] ? Object.keys(company.years[selectedYear]) : [];

  return (
    <div className="dashboard-container" style={{ '--accent-color': company?.color } as any}>
      <header className="header">
        <h1>投資研究儀表板</h1>
        <div className="filters">
          <select value={selectedTicker} onChange={(e) => setSelectedTicker(e.target.value)}>
            {tickers.map(t => <option key={t} value={t}>{wikiData[t].name} ({t})</option>)}
          </select>
          <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
            {years.map(y => <option key={y} value={y}>{y} 年</option>)}
          </select>
          <select value={selectedQuarter} onChange={(e) => setSelectedQuarter(e.target.value)}>
            {quarters.map(q => <option key={q} value={q}>{q}</option>)}
          </select>
        </div>
      </header>

      {currentData ? (
        <>
          <section className="section">
            <h2 className="section-title">核心營運指標</h2>
            <div className="kpi-grid">
              {currentData.metrics.map((m, i) => (
                <div key={i} className="kpi-card">
                  <div className="kpi-label">{m.label}</div>
                  <div className="kpi-value">{m.value}</div>
                  {m.subValue && (
                    <div className={`kpi-subvalue trend-${m.trend}`}>
                      {m.subValue}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">營收業務組成 (1Q26)</h2>
            <div className="revenue-section">
              <div className="pie-chart" style={{
                background: `conic-gradient(
                  var(--accent-color) 0% ${currentData.revenueSegments[0].value}%,
                  #3b82f6 ${currentData.revenueSegments[0].value}% ${currentData.revenueSegments[0].value + currentData.revenueSegments[1].value}%,
                  #94a3b8 ${currentData.revenueSegments[0].value + currentData.revenueSegments[1].value}% 100%
                )`
              }}></div>
              <div className="legend">
                {currentData.revenueSegments.map((s, i) => (
                  <div key={i} className="legend-item">
                    <div className="legend-label">
                      <span className="dot" style={{ backgroundColor: i === 0 ? 'var(--accent-color)' : i === 1 ? '#3b82f6' : '#94a3b8' }}></span>
                      <span>{s.label}</span>
                    </div>
                    <div className="legend-value">{s.value}% ({s.amount})</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">關鍵成長引擎</h2>
            <div className="insight-grid">
              {currentData.growthEngines.map((g, i) => (
                <div key={i} className="insight-card">
                  <h3>{g.title}</h3>
                  <p>{g.content}</p>
                  <div className="insight-source">來源：{g.source}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">策略趨勢與轉型</h2>
            <div className="insight-grid">
              {currentData.strategicTrends.map((s, i) => (
                <div key={i} className="insight-card">
                  <h3>{s.title}</h3>
                  <p>{s.content}</p>
                  <div className="insight-source">來源：{s.source}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">未來展望 (Outlook)</h2>
            <div className="outlook-grid" style={{ marginBottom: '2rem' }}>
              {currentData.segmentOutlooks.map((s, i) => (
                <div key={i} className="outlook-card">
                  <div className="outlook-header">
                    <span className="outlook-label">{s.label}</span>
                    <span className={`outlook-status status-${s.expectation}`}>
                      {s.expectation === 'up' ? '成長' : s.expectation === 'down' ? '衰退' : '持平'}
                    </span>
                  </div>
                  <p className="outlook-desc">{s.description}</p>
                </div>
              ))}
            </div>
            <div className="outlook-banner">
              {currentData.outlook.map((o, i) => (
                <div key={i} className="outlook-item">
                  <div className="kpi-label">{o.label}</div>
                  <div className="kpi-value">{o.value}</div>
                  {o.subValue && <div className="kpi-subvalue">{o.subValue}</div>}
                </div>
              ))}
            </div>
          </section>
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '5rem', color: 'var(--text-secondary)' }}>
          <h2>尚未錄入該季度的研究資料</h2>
          <p>請嘗試選擇其他年份或季度</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
