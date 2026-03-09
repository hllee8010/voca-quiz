import { useState, useEffect, useCallback } from "react";

const words = [
  { en: "abandon", ko: "버리다, 포기하다" },
  { en: "accomplish", ko: "성취하다" },
  { en: "accurately", ko: "정확하게" },
  { en: "achievement", ko: "성취" },
  { en: "activate", ko: "활성화하다" },
  { en: "adapt", ko: "적응하다" },
  { en: "address", ko: "다루다, 해결하다" },
  { en: "aesthetic", ko: "미적인" },
  { en: "affect", ko: "영향을 미치다" },
  { en: "alarm", ko: "경보, 알람" },
  { en: "alter", ko: "바꾸다, 변경하다" },
  { en: "altruist", ko: "이타주의자" },
  { en: "alongside", ko: "함께, 나란히" },
  { en: "analytical", ko: "분석적인" },
  { en: "anew", ko: "새롭게" },
  { en: "announce", ko: "발표하다" },
  { en: "anxious", ko: "불안한" },
  { en: "approach", ko: "다가오다" },
  { en: "arise", ko: "발생하다" },
  { en: "assert", ko: "주장하다" },
  { en: "assertive", ko: "적극적인, 주장이 강한" },
  { en: "assign", ko: "부여하다, 배정하다" },
  { en: "assist", ko: "돕다" },
  { en: "associate", ko: "연관 짓다" },
  { en: "association", ko: "연관, 연상" },
  { en: "assurance", ko: "확신, 보장" },
  { en: "assume", ko: "맡다, 떠안다 / 가정하다" },
  { en: "auditory", ko: "청각의" },
  { en: "automatic", ko: "자동적인" },
  { en: "avenue", ko: "방법, 수단" },
  { en: "award", ko: "수여하다" },
  { en: "awkward", ko: "어색한, 불편한" },
  { en: "behavioral", ko: "행동의" },
  { en: "beneath", ko: "아래에" },
  { en: "bias", ko: "편견" },
  { en: "blind", ko: "맹목적인, 가려진" },
  { en: "blossom", ko: "성장하다, 꽃피우다" },
  { en: "border", ko: "국경, 경계" },
  { en: "border on", ko: "~에 가깝다" },
  { en: "boundary", ko: "경계" },
  { en: "capable", ko: "능력 있는" },
  { en: "caution", ko: "주의" },
  { en: "challenge", ko: "도전하다, 위협하다" },
  { en: "chemical", ko: "화학적인" },
  { en: "circumstance", ko: "상황, 환경" },
  { en: "clarity", ko: "명확성" },
  { en: "classification", ko: "분류" },
  { en: "cloud", ko: "흐리게 하다" },
  { en: "collaborate", ko: "협력하다" },
  { en: "combination", ko: "결합, 조합" },
  { en: "combine", ko: "결합하다" },
  { en: "commit", ko: "저지르다" },
  { en: "communicative", ko: "의사소통의" },
  { en: "competition", ko: "대회, 경쟁" },
  { en: "complexity", ko: "복잡성" },
  { en: "compose", ko: "짓다, 작성하다 / 작곡하다" },
  { en: "compromise", ko: "타협하다" },
  { en: "compel", ko: "강요하다, 이끌다" },
  { en: "concern", ko: "관심사, 우려" },
  { en: "confirm", ko: "확인하다, 굳히다" },
  { en: "conform", ko: "부합하다, 따르다" },
  { en: "connotation", ko: "함축, 연상" },
  { en: "conscious", ko: "의식적인" },
  { en: "consciously", ko: "의식적으로" },
  { en: "consciousness", ko: "의식" },
  { en: "considerable", ko: "상당한" },
  { en: "consideration", ko: "고려, 숙고" },
  { en: "consistent", ko: "일관된" },
  { en: "constantly", ko: "끊임없이" },
  { en: "construction", ko: "구성, 구축" },
  { en: "continually", ko: "지속적으로" },
  { en: "contribute", ko: "기여하다" },
  { en: "control", ko: "통제하다" },
  { en: "controversial", ko: "논쟁적인" },
  { en: "conventional", ko: "관습적인, 전통적인" },
  { en: "coordination", ko: "협응, 조화" },
  { en: "correspond", ko: "일치하다, 부합하다" },
  { en: "craft", ko: "만들다, 설계하다" },
  { en: "cultivate", ko: "기르다, 함양하다" },
  { en: "deadline", ko: "마감일" },
  { en: "decrease", ko: "감소하다" },
  { en: "define", ko: "정의하다" },
  { en: "degree", ko: "정도" },
  { en: "deliver", ko: "전달하다" },
  { en: "denial", ko: "부정, 거부" },
  { en: "depend", ko: "의존하다" },
  { en: "depend on", ko: "~에 달려 있다" },
  { en: "desire", ko: "욕구, 바람" },
  { en: "deserving", ko: "~을 받을 만한" },
  { en: "determine", ko: "결정하다, 파악하다" },
  { en: "difference", ko: "차이" },
  { en: "diminish", ko: "작아지다, 줄어들다" },
  { en: "disadvantaged", ko: "불리한, 소외된" },
  { en: "discrimination", ko: "차별" },
  { en: "dismiss", ko: "무시하다" },
  { en: "dispose of", ko: "처리하다" },
  { en: "disastrous", ko: "재앙적인" },
  { en: "disrupt", ko: "방해하다, 훼손하다" },
  { en: "distance", ko: "거리" },
  { en: "diverse", ko: "다양한" },
  { en: "dominant", ko: "지배적인" },
  { en: "double", ko: "두 배의" },
  { en: "drain", ko: "빠져나가다, 소진되다" },
  { en: "drop out", ko: "중퇴하다" },
  { en: "duty", ko: "업무, 의무" },
  { en: "dynamics", ko: "역학, 동태" },
  { en: "ecological", ko: "생태학적인" },
  { en: "egocentric", ko: "자기중심적인" },
  { en: "eliminate", ko: "없애다, 제거하다" },
  { en: "emotionally", ko: "감정적으로" },
  { en: "enable", ko: "가능하게 하다" },
  { en: "encounter", ko: "맞닥뜨리다" },
  { en: "encourage", ko: "격려하다, 권유하다" },
  { en: "energy", ko: "에너지, 힘" },
  { en: "engagement", ko: "참여, 몰입" },
  { en: "equally", ko: "똑같이" },
  { en: "equal", ko: "같은, 동일한" },
  { en: "emergency", ko: "비상, 긴급" },
  { en: "entirely", ko: "완전히" },
  { en: "enthusiast", ko: "열광자, 애호가" },
  { en: "except", ko: "~을 제외하고" },
  { en: "exacting", ko: "엄밀한, 까다로운" },
  { en: "examine", ko: "검토하다" },
  { en: "exceed", ko: "초과하다, 넘다" },
  { en: "exclusively", ko: "오직, 전적으로" },
  { en: "existence", ko: "존재" },
  { en: "explicit", ko: "명시적인" },
  { en: "exposure", ko: "노출" },
  { en: "extend", ko: "확장되다" },
  { en: "extract", ko: "추출하다" },
  { en: "extreme", ko: "극단적인" },
  { en: "facilitator", ko: "촉진자" },
  { en: "familiar", ko: "익숙한" },
  { en: "favor", ko: "선호하다, 유리하게 하다" },
  { en: "findings", ko: "연구 결과" },
  { en: "figurative", ko: "구상적인, 형상의" },
  { en: "flash", ko: "깜박이다" },
  { en: "flexible", ko: "유연한" },
  { en: "focal point", ko: "초점" },
  { en: "fortune", ko: "행운" },
  { en: "foster", ko: "촉진하다, 장려하다" },
  { en: "found", ko: "설립하다" },
  { en: "frame", ko: "틀, 체계" },
  { en: "fundamental", ko: "기본, 기초" },
  { en: "gap", ko: "공백, 간격" },
  { en: "generally", ko: "일반적으로" },
  { en: "generate", ko: "만들어 내다" },
  { en: "generation", ko: "세대" },
  { en: "glance", ko: "흘낏 보다" },
  { en: "gradually", ko: "점차적으로" },
  { en: "grounded", ko: "확고히 자리 잡은" },
  { en: "habitat", ko: "서식지" },
  { en: "hang on", ko: "버티다, 매달리다" },
  { en: "hardship", ko: "고난, 어려움" },
  { en: "hence", ko: "앞으로, 이후에" },
  { en: "henceforth", ko: "이후로, 앞으로는" },
  { en: "highest", ko: "가장 높은" },
  { en: "honor", ko: "기리다, 기념하다" },
  { en: "humanity", ko: "인류, 인간성" },
  { en: "idealistic", ko: "이상주의적인" },
  { en: "identity", ko: "정체성" },
  { en: "immobilize", ko: "고정시키다" },
  { en: "immigration", ko: "이민" },
  { en: "import", ko: "수입하다" },
  { en: "incorporate", ko: "통합하다, 포함하다" },
  { en: "individual", ko: "개인" },
  { en: "inequality", ko: "불평등" },
  { en: "influence", ko: "영향을 미치다" },
  { en: "informative", ko: "정보를 주는" },
  { en: "inhibition", ko: "억제, 저해" },
  { en: "innocent", ko: "순수한" },
  { en: "input", ko: "입력하다" },
  { en: "inscription", ko: "새겨진 글" },
  { en: "insert", ko: "삽입하다, 넣다" },
  { en: "insist", ko: "강조하다, 주장하다" },
  { en: "inspire", ko: "영감을 주다" },
  { en: "install", ko: "설치하다" },
  { en: "instructor", ko: "교수자, 강사" },
  { en: "integrate", ko: "통합하다" },
  { en: "interfere", ko: "방해하다" },
  { en: "intentionality", ko: "의도성" },
  { en: "intentionally", ko: "의도적으로" },
  { en: "interpretation", ko: "해석, 접근 방식" },
  { en: "invariant", ko: "불변하는 요소" },
  { en: "invaluable", ko: "매우 귀중한" },
  { en: "invent", ko: "만들어 내다" },
  { en: "invest", ko: "투자하다" },
  { en: "irrational", ko: "비이성적인" },
  { en: "judgment", ko: "판단" },
  { en: "label", ko: "표시하다, 딱지를 붙이다" },
  { en: "landmark", ko: "지표, 랜드마크" },
  { en: "layout", ko: "배치, 구성" },
  { en: "life preserver", ko: "구명 도구" },
  { en: "likewise", ko: "마찬가지로" },
  { en: "linguistic", ko: "언어적인" },
  { en: "literally", ko: "문자 그대로, 실제로" },
  { en: "literal", ko: "문자 그대로의" },
  { en: "likelihood", ko: "가능성" },
  { en: "location", ko: "위치" },
  { en: "longterm", ko: "장기적인" },
  { en: "manage", ko: "관리하다" },
  { en: "manual", ko: "손을 쓰는, 수동의" },
  { en: "matter", ko: "중요하다" },
  { en: "mastery", ko: "숙달, 통달" },
  { en: "mechanics", ko: "구조, 메커니즘" },
  { en: "mentor", ko: "멘토, 조언자" },
  { en: "metaphor", ko: "은유" },
  { en: "mistreat", ko: "학대하다, 함부로 대하다" },
  { en: "mixed-use", ko: "복합 용도의" },
  { en: "modify", ko: "수정하다" },
  { en: "momentarily", ko: "순간적으로" },
  { en: "monitoring", ko: "모니터링, 감시" },
  { en: "moral", ko: "도덕적인" },
  { en: "mortal", ko: "생명을 위협하는" },
  { en: "mortality", ko: "죽음, 필멸성" },
  { en: "multilingual", ko: "다언어 사용자" },
  { en: "narration", ko: "서술, 이야기" },
  { en: "narrator", ko: "서술자" },
  { en: "navigate", ko: "헤쳐나가다" },
  { en: "negative", ko: "부정적인" },
  { en: "normalize", ko: "정상화하다" },
  { en: "notion", ko: "개념, 생각" },
  { en: "obligation", ko: "의무" },
  { en: "obtain", ko: "얻다, 취득하다" },
  { en: "offend", ko: "기분 상하게 하다" },
  { en: "ongoing", ko: "지속적인" },
  { en: "opt for", ko: "~을 선택하다" },
  { en: "opportunity", ko: "기회" },
  { en: "oppose", ko: "반대하다" },
  { en: "opposite", ko: "반대의" },
  { en: "ordinary", ko: "일반적인, 평범한" },
  { en: "originality", ko: "독창성" },
  { en: "outcome", ko: "결과" },
  { en: "override", ko: "무시하다, 압도하다" },
  { en: "participate", ko: "참가하다" },
  { en: "particular", ko: "특정한" },
  { en: "perceive", ko: "인식하다" },
  { en: "perception", ko: "인식, 지각" },
  { en: "permanence", ko: "영속성" },
  { en: "perspective", ko: "관점, 시각" },
  { en: "philosophy", ko: "철학" },
  { en: "physical", ko: "신체적인" },
  { en: "physiological", ko: "생리적인" },
  { en: "placebo", ko: "플라세보, 위약" },
  { en: "plasticity", ko: "가소성, 유연성" },
  { en: "pointless", ko: "무의미한" },
  { en: "poison", ko: "독을 퍼뜨리다, 오염시키다" },
  { en: "population", ko: "개체 수, 인구" },
  { en: "portray", ko: "묘사하다" },
  { en: "position", ko: "위치, 자세" },
  { en: "positive", ko: "긍정적인" },
  { en: "potentially", ko: "잠재적으로" },
  { en: "praise", ko: "칭찬" },
  { en: "preoccupation", ko: "집착, 몰두" },
  { en: "press", ko: "누르다" },
  { en: "preserve", ko: "보존하다" },
  { en: "primary", ko: "주요한, 기본적인" },
  { en: "prioritize", ko: "우선시하다" },
  { en: "privilege", ko: "특권, 영광" },
  { en: "privileged", ko: "특권을 가진" },
  { en: "proactive", ko: "주도적인" },
  { en: "process", ko: "과정, 작용" },
  { en: "promote", ko: "촉진하다" },
  { en: "protect", ko: "보호하다" },
  { en: "proverb", ko: "속담" },
  { en: "psychological", ko: "심리적인" },
  { en: "pursuit", ko: "추구, 활동" },
  { en: "rate", ko: "요금, 비율" },
  { en: "rating", ko: "평가, 점수" },
  { en: "reaction", ko: "반응" },
  { en: "real-time", ko: "실시간의" },
  { en: "reach", ko: "도달하다" },
  { en: "reinvention", ko: "재창조" },
  { en: "reject", ko: "거부하다" },
  { en: "relative", ko: "상대적인" },
  { en: "relevant", ko: "관련 있는, 적절한" },
  { en: "reliable", ko: "신뢰할 수 있는" },
  { en: "relieve", ko: "완화하다" },
  { en: "relief", ko: "안도(감)" },
  { en: "rely", ko: "의존하다" },
  { en: "remain", ko: "남다, 유지하다" },
  { en: "remarkable", ko: "놀라운" },
  { en: "remold", ko: "재형성하다" },
  { en: "remove", ko: "제거하다" },
  { en: "replace", ko: "교체하다" },
  { en: "represent", ko: "표현하다, 나타내다" },
  { en: "reputation", ko: "평판" },
  { en: "rescue", ko: "구조하다" },
  { en: "reset", ko: "초기화하다, 재설정하다" },
  { en: "responsibility", ko: "책임" },
  { en: "restrict", ko: "제한하다" },
  { en: "restructure", ko: "재구성하다" },
  { en: "reveal", ko: "드러내다" },
  { en: "revise", ko: "수정하다" },
  { en: "rework", ko: "다듬다, 수정하다" },
  { en: "revolutionary", ko: "혁명적인" },
  { en: "role", ko: "역할" },
  { en: "sacrifice", ko: "희생" },
  { en: "satisfy", ko: "충족시키다" },
  { en: "scene", ko: "장면, 광경" },
  { en: "self-concept", ko: "자아 개념" },
  { en: "sensory", ko: "감각의" },
  { en: "sentence", ko: "선고, 판결" },
  { en: "serve", ko: "근무하다, 일하다" },
  { en: "set off", ko: "작동시키다" },
  { en: "settle", ko: "정착하다" },
  { en: "shade", ko: "색조, 음영" },
  { en: "shield", ko: "보호하다" },
  { en: "significant", ko: "유의미한, 상당한" },
  { en: "smooth", ko: "원활한" },
  { en: "social", ko: "사회적인" },
  { en: "solely", ko: "오직, 단지" },
  { en: "span", ko: "걸치다, 포괄하다" },
  { en: "spark", ko: "불러일으키다" },
  { en: "spatial", ko: "공간적인" },
  { en: "spectrum", ko: "스펙트럼, 범위" },
  { en: "spontaneously", ko: "자연스럽게, 즉흥적으로" },
  { en: "spoil", ko: "망치다" },
  { en: "spread", ko: "퍼지다" },
  { en: "spy", ko: "발견하다, 목격하다" },
  { en: "stable", ko: "안정적인" },
  { en: "standard", ko: "기준, 표준" },
  { en: "status", ko: "지위, 상태" },
  { en: "stereotype", ko: "고정관념" },
  { en: "still", ko: "여전히" },
  { en: "strength", ko: "힘, 체력" },
  { en: "stretch", ko: "확장하다, 늘리다" },
  { en: "subjective", ko: "주관적인" },
  { en: "submit", ko: "제출하다" },
  { en: "survival", ko: "생존" },
  { en: "sustainable", ko: "지속 가능한" },
  { en: "systemic", ko: "체계적인, 구조적인" },
  { en: "taboo", ko: "금기의" },
  { en: "talented", ko: "재능 있는" },
  { en: "theme", ko: "주제" },
  { en: "thoroughly", ko: "철저하게" },
  { en: "threaten", ko: "위협하다" },
  { en: "tradition", ko: "전통" },
  { en: "traditionally", ko: "전통적으로" },
  { en: "transfer", ko: "인계, 이전" },
  { en: "transformation", ko: "변화, 변신" },
  { en: "treat", ko: "여기다, 대하다" },
  { en: "tribe", ko: "집단, 부족" },
  { en: "trustworthy", ko: "신뢰할 수 있는" },
  { en: "unconscious", ko: "무의식적인" },
  { en: "unconsciously", ko: "무의식적으로" },
  { en: "undergo", ko: "겪다, 경험하다" },
  { en: "underlying", ko: "근본적인, 내재된" },
  { en: "unexpected", ko: "예상치 못한" },
  { en: "unfamiliar", ko: "낯선" },
  { en: "unintentionally", ko: "의도치 않게" },
  { en: "unrecognizable", ko: "알아볼 수 없는" },
  { en: "unreality", ko: "비현실성" },
  { en: "upper", ko: "위쪽의, 상체의" },
  { en: "uproot", ko: "뿌리 뽑다, 이탈시키다" },
  { en: "validity", ko: "타당성" },
  { en: "variance", ko: "차이, 변이" },
  { en: "vary", ko: "다르다, 다양하다" },
  { en: "vocabulary", ko: "어휘" },
  { en: "viewpoint", ko: "관점" },
  { en: "walkable", ko: "도보 이용 가능한" },
  { en: "warn", ko: "경고하다" },
  { en: "wave", ko: "파도" },
  { en: "weighted", ko: "가중된" },
  { en: "well-being", ko: "행복, 안녕" },
  { en: "well-known", ko: "잘 알려진" },
  { en: "wetland", ko: "습지" },
  { en: "workshop", ko: "워크숍, 강습" },
  { en: "wreckage", ko: "잔해" },
  { en: "in charge of", ko: "~을 책임지는" },
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getChoices(correct, all) {
  const wrong = shuffle(all.filter(w => w.ko !== correct.ko)).slice(0, 3);
  return shuffle([correct, ...wrong]);
}

export default function VocabQuiz() {
  const [queue, setQueue] = useState([]);
  const [current, setCurrent] = useState(null);
  const [choices, setChoices] = useState([]);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [wrong, setWrong] = useState([]);
  const [phase, setPhase] = useState("intro");
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [shakeIdx, setShakeIdx] = useState(null);
  const [total, setTotal] = useState(20);

  const startQuiz = useCallback((count) => {
    const q = shuffle(words).slice(0, count);
    setQueue(q);
    setScore(0);
    setAnswered(0);
    setWrong([]);
    setStreak(0);
    setBestStreak(0);
    setSelected(null);
    setShakeIdx(null);
    const first = q[0];
    setCurrent(first);
    setChoices(getChoices(first, words));
    setPhase("quiz");
  }, []);

  const handleSelect = (choice, idx) => {
    if (selected !== null) return;
    setSelected(idx);
    const isCorrect = choice.en === current.en;
    if (isCorrect) {
      const ns = streak + 1;
      setScore(s => s + 1);
      setStreak(ns);
      if (ns > bestStreak) setBestStreak(ns);
    } else {
      setShakeIdx(idx);
      setStreak(0);
      setWrong(w => [...w, { word: current, chosen: choice }]);
      setTimeout(() => setShakeIdx(null), 500);
    }
    setTimeout(() => {
      const next = answered + 1;
      setAnswered(next);
      if (next >= queue.length) {
        setPhase("result");
        return;
      }
      const nextWord = queue[next];
      setCurrent(nextWord);
      setChoices(getChoices(nextWord, words));
      setSelected(null);
    }, isCorrect ? 700 : 1100);
  };

  const progress = queue.length > 0 ? (answered / queue.length) * 100 : 0;

  if (phase === "intro") {
    return (
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'Noto Sans KR', 'Malgun Gothic', sans-serif",
        padding: "20px"
      }}>
        <div style={{
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "24px",
          padding: "52px 44px",
          maxWidth: "460px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 32px 64px rgba(0,0,0,0.5)"
        }}>
          <div style={{ fontSize: "56px", marginBottom: "16px" }}>📚</div>
          <h1 style={{ color: "#fff", fontSize: "28px", fontWeight: 800, margin: "0 0 8px" }}>
            영단어 퀴즈
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", marginBottom: "36px" }}>
            총 <strong style={{ color: "#a78bfa" }}>{words.length}개</strong> 단어 중 랜덤 출제
          </p>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", marginBottom: "16px" }}>문제 수 선택</p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "32px" }}>
            {[10, 20, 30, 50].map(n => (
              <button key={n} onClick={() => setTotal(n)} style={{
                padding: "10px 20px", borderRadius: "12px", border: "2px solid",
                borderColor: total === n ? "#a78bfa" : "rgba(255,255,255,0.2)",
                background: total === n ? "rgba(167,139,250,0.2)" : "transparent",
                color: total === n ? "#a78bfa" : "rgba(255,255,255,0.6)",
                fontWeight: 700, fontSize: "15px", cursor: "pointer"
              }}>{n}</button>
            ))}
          </div>
          <button onClick={() => startQuiz(total)} style={{
            width: "100%", padding: "16px", borderRadius: "14px",
            background: "linear-gradient(135deg, #a78bfa, #7c3aed)",
            border: "none", color: "#fff", fontSize: "17px",
            fontWeight: 800, cursor: "pointer",
            boxShadow: "0 8px 24px rgba(124,58,237,0.4)"
          }}>시작하기 →</button>
        </div>
      </div>
    );
  }

  if (phase === "result") {
    const pct = Math.round((score / queue.length) * 100);
    const grade = pct >= 90 ? "🏆 완벽!" : pct >= 70 ? "👏 훌륭해요!" : pct >= 50 ? "💪 조금만 더!" : "📖 다시 해봐요";
    return (
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'Noto Sans KR', 'Malgun Gothic', sans-serif",
        padding: "20px"
      }}>
        <div style={{
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "24px",
          padding: "44px 36px",
          maxWidth: "500px", width: "100%",
          textAlign: "center",
          boxShadow: "0 32px 64px rgba(0,0,0,0.5)"
        }}>
          <div style={{ fontSize: "52px", marginBottom: "12px" }}>{grade.split(" ")[0]}</div>
          <h2 style={{ color: "#fff", fontSize: "24px", fontWeight: 800, margin: "0 0 6px" }}>
            {grade.split(" ").slice(1).join(" ")}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", marginBottom: "28px" }}>
            {queue.length}문제 중 <strong style={{ color: "#a78bfa" }}>{score}개</strong> 정답
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "32px" }}>
            {[
              { label: "정답률", value: pct + "%" },
              { label: "최고 연속", value: bestStreak + "개" },
              { label: "오답", value: wrong.length + "개" },
            ].map(({ label, value }) => (
              <div key={label} style={{
                background: "rgba(255,255,255,0.07)",
                borderRadius: "14px", padding: "14px 18px"
              }}>
                <div style={{ color: "#a78bfa", fontSize: "22px", fontWeight: 800 }}>{value}</div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "12px" }}>{label}</div>
              </div>
            ))}
          </div>
          {wrong.length > 0 && (
            <div style={{ marginBottom: "28px", textAlign: "left" }}>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", marginBottom: "10px" }}>❌ 틀린 단어 복습</p>
              <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                {wrong.map(({ word, chosen }, i) => (
                  <div key={i} style={{
                    background: "rgba(239,68,68,0.1)",
                    border: "1px solid rgba(239,68,68,0.25)",
                    borderRadius: "10px", padding: "10px 14px",
                    marginBottom: "6px", fontSize: "13px"
                  }}>
                    <span style={{ color: "#f87171", fontWeight: 700 }}>{word.en}</span>
                    <span style={{ color: "rgba(255,255,255,0.4)", margin: "0 8px" }}>→</span>
                    <span style={{ color: "#86efac" }}>{word.ko}</span>
                    <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px", marginLeft: "8px" }}>(내 답: {chosen.ko})</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => startQuiz(total)} style={{
              flex: 1, padding: "14px", borderRadius: "12px",
              background: "linear-gradient(135deg, #a78bfa, #7c3aed)",
              border: "none", color: "#fff", fontSize: "15px",
              fontWeight: 700, cursor: "pointer"
            }}>다시 풀기</button>
            <button onClick={() => setPhase("intro")} style={{
              flex: 1, padding: "14px", borderRadius: "12px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.7)", fontSize: "15px",
              fontWeight: 700, cursor: "pointer"
            }}>처음으로</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Noto Sans KR', 'Malgun Gothic', sans-serif",
      padding: "20px"
    }}>
      <div style={{
        width: "100%", maxWidth: "520px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        marginBottom: "20px"
      }}>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>
          {answered + 1} / {queue.length}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          {streak >= 3 && (
            <span style={{
              background: "rgba(251,146,60,0.2)",
              border: "1px solid rgba(251,146,60,0.4)",
              borderRadius: "20px", padding: "3px 10px",
              color: "#fb923c", fontSize: "12px", fontWeight: 700
            }}>🔥 {streak} 연속</span>
          )}
          <span style={{ color: "#86efac", fontSize: "13px", fontWeight: 700 }}>✓ {score}</span>
        </div>
      </div>
      <div style={{
        width: "100%", maxWidth: "520px",
        height: "4px", background: "rgba(255,255,255,0.1)",
        borderRadius: "2px", marginBottom: "28px", overflow: "hidden"
      }}>
        <div style={{
          height: "100%", width: progress + "%",
          background: "linear-gradient(90deg, #a78bfa, #7c3aed)",
          borderRadius: "2px", transition: "width 0.4s ease"
        }} />
      </div>
      <div style={{
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: "24px",
        padding: "40px 36px 32px",
        maxWidth: "520px", width: "100%",
        boxShadow: "0 24px 48px rgba(0,0,0,0.4)"
      }}>
        <p style={{
          color: "rgba(255,255,255,0.35)", fontSize: "11px",
          textTransform: "uppercase", letterSpacing: "2px",
          marginBottom: "12px", textAlign: "center"
        }}>뜻을 고르세요</p>
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <span style={{
            color: "#fff", fontSize: "38px", fontWeight: 900,
            letterSpacing: "-0.5px",
            textShadow: "0 0 30px rgba(167,139,250,0.4)"
          }}>{current?.en}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {choices.map((choice, idx) => {
            const isSelected = selected === idx;
            const isCorrectChoice = choice.en === current?.en;
            let bg = "rgba(255,255,255,0.06)";
            let borderColor = "rgba(255,255,255,0.12)";
            let textColor = "rgba(255,255,255,0.85)";
            let icon = null;
            if (selected !== null) {
              if (isCorrectChoice) {
                bg = "rgba(134,239,172,0.15)";
                borderColor = "#86efac";
                textColor = "#86efac";
                icon = "✓";
              } else if (isSelected) {
                bg = "rgba(248,113,113,0.15)";
                borderColor = "#f87171";
                textColor = "#f87171";
                icon = "✗";
              }
            }
            return (
              <button key={idx} onClick={() => handleSelect(choice, idx)} style={{
                padding: "15px 20px", borderRadius: "14px",
                background: bg, border: `1.5px solid ${borderColor}`,
                color: textColor, fontSize: "15px", fontWeight: 600,
                cursor: selected !== null ? "default" : "pointer",
                textAlign: "left", transition: "all 0.2s",
                display: "flex", justifyContent: "space-between", alignItems: "center",
                animation: shakeIdx === idx ? "shake 0.4s" : "none",
                fontFamily: "'Noto Sans KR', 'Malgun Gothic', sans-serif",
              }}>
                <span>{choice.ko}</span>
                {icon && <span style={{ fontSize: "18px" }}>{icon}</span>}
              </button>
            );
          })}
        </div>
      </div>
      <style>{`
        @keyframes shake {
          0%,100%{transform:translateX(0)}
          20%{transform:translateX(-8px)}
          40%{transform:translateX(8px)}
          60%{transform:translateX(-5px)}
          80%{transform:translateX(5px)}
        }
      `}</style>
    </div>
  );
}
