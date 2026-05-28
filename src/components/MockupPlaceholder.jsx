const screenCopy = {
  onboarding: {
    title: '오늘의 스타일에 맞는\n맛집 추천',
    text: '입은 옷의 무드를 분석해\n어울리는 장소를 추천해드려요',
  },
  address: {
    title: '어느 지역의\n장소를 찾으시나요?',
    text: '오늘 방문할 지역을 검색해주세요',
  },
  result: {
    title: '오늘의 무드와 잘 맞는 장소',
    text: '차분한 블랙 착장에 어울리는 다이닝',
  },
  mood: {
    title: '무드별 공간 탐색',
    text: 'minimal / vintage / casual / date',
  },
  detail: {
    title: '몽크스부처 도산',
    text: '낮은 조도와 빈티지 무드가 어울리는 공간',
  },
  review: {
    title: '비슷한 취향 리뷰',
    text: '나와 가까운 스타일의 사용자가 남긴 후기',
  },
  saved: {
    title: '저장한 장소',
    text: '다음 약속을 위해 남겨둔 큐레이션',
  },
  reservation: {
    title: '예약 완료',
    text: '오늘의 스타일과 어울리는 저녁이 준비됐어요',
  },
};

function StatusBar() {
  return (
    <div className="app-status">
      <span>9:41</span>
      <div><i /><i /><i /></div>
    </div>
  );
}

function BottomNav() {
  return (
    <div className="app-nav">
      <span>홈</span>
      <span>저장</span>
      <button aria-label="camera" type="button">⌾</button>
      <span>탐색</span>
      <span>MY</span>
    </div>
  );
}

function AppScreen({ type = 'onboarding', label }) {
  const copy = screenCopy[type] ?? screenCopy.onboarding;

  if (type === 'camera') {
    return (
      <div className="app-screen app-screen--camera">
        <div className="camera-top"><span>×</span><strong>RAW</strong><span>LIVE</span></div>
        <div className="camera-scene">
          <div className="camera-person" />
          <div className="scan-frame" />
          <span className="scan-label">STYLE SCAN</span>
        </div>
        <div className="camera-controls">
          <div className="zoom-control"><span>.5</span><strong>1x</strong><span>3</span></div>
          <div className="camera-modes"><span>CINEMATIC</span><strong>PHOTO</strong><span>PORTRAIT</span></div>
          <div className="shutter-row"><i /><button type="button" aria-label="shutter" /><i /></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`app-screen app-screen--${type}`}>
      <StatusBar />
      <div className="app-content">
        <div className="app-heading">
          <strong>{copy.title}</strong>
          <p>{copy.text}</p>
        </div>

        {type === 'onboarding' && (
          <>
            <div className="style-orbit">
              <i /><i /><i /><i />
            </div>
            <div className="pager"><i /><i /><i /></div>
            <button className="primary-button" type="button">시작하기</button>
          </>
        )}

        {type === 'address' && (
          <>
            <div className="search-field"><span>지역을 입력해주세요.</span><b>⌕</b></div>
            <small>ex) 서울 합정, 성수, 도산공원</small>
          </>
        )}

        {['result', 'mood', 'detail', 'review', 'saved', 'reservation'].includes(type) && (
          <div className="place-stack">
            <div className="place-photo" />
            <div className="place-card-row">
              <span>minimal</span>
              <span>date</span>
              <span>low light</span>
            </div>
            <div className="place-card">
              <b>{label}</b>
              <p>스타일 매칭 94%</p>
            </div>
          </div>
        )}
      </div>
      {type !== 'onboarding' && <BottomNav />}
    </div>
  );
}

export default function MockupPlaceholder({ label, variant = 'phone', image, meta, screen }) {
  const style = image ? { backgroundImage: `url(${image})` } : undefined;

  return (
    <figure className={`mockup mockup--${variant}`}>
      <div className="mockup-screen" style={style}>
        {!image && screen && <AppScreen type={screen} label={label} />}
        {!image && !screen && (
          <div className="mockup-inner">
            <span>{label}</span>
            {meta && <small>{meta}</small>}
          </div>
        )}
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}
