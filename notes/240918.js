const problems = [
    {
        prompt: "M39 GUN에 사용되는 20MM 탄약의 Link Type은?",
        options: ["M14", "M12", "M11", "M10"],
        answer: 2,
    },
    {
        prompt: "MK-82 GP BOMB에 MAU-93 Conical Fin 장착 시 사용되는 Shaft Type은?",
        options: ["MAU-86/B-5", "MAU-86/B-6", "MAU-86/B-7", "MAU-86/B-8"],
        answer: 1,
    },
    {
        prompt: "20MM 탄약의 구성품으로 맞지 않는 것은?",
        options: ["cartridge case", "projectile", "primer", "gun muzzle"],
        answer: 4,
    },
    {
        prompt: "20MM 탄약 중 TPT의 색채 표기는?",
        options: ["백색 탄체에 청색 표기", "청색 탄체에 백색 표기", "국방색 탄체에 청색 표기", "황색 탄체에 백색 표기"],
        answer: 2,
    },
    {
        prompt: "MK-82 GP BOMB의 내부 충진물이 Tritonal일 때 탄체 전방 황색띠의 폭은 얼마인가?",
        options: ["1\"", "2\"", "3\"", "4\""],
        answer: 3,
    },
    {
        prompt: "M61 GUN 계열에 사용되는 Link Type은?",
        options: ["M14", "M12", "M11", "M10"],
        answer: 1,
    },
    {
        prompt: "20MM HEI 탄약의 위험 등급은?",
        options: ["1.1", "1.2", "1.3", "1.4"],
        answer: 2,
    },
    {
        prompt: "이동형 탄약 조립 장비 RAMS 설치 및 운용 시 설치 장쇼의 크기로 알맞은 것은?",
        options: ["20X100FT", "50X100FT", "20X200FT", "50X200FT"],
        answer: 2,
    },
    {
        prompt: "BDU-33의 외부 포장상자가 손상되었을 때 조치사항으로 잘못 나열된 것은?",
        options: ["손상된 부분 제거", "교체에 의한 수리", "품목 폐기", "사용가능한 상자에 재포장"],
        answer: 3,
    },
    {
        prompt: "CXU-3 SIGNAL의 정기검사 주기는 몇년인가?",
        options: ["5년", "6년", "7년", "8년"],
        answer: 1,
    },
    {
        prompt: "BDU-33의 외부 포장상자는 내용물이 과도하게 느슨할 경우 어떤 조치를 하여야 하는가?",
        options: ["내용물 추가 저장후 포장", "적절한 포장재료로 내용물을 고정", "밴딩으로 강하게 묶음", "폐기처리 한다"],
        answer: 2,
    },
    {
        prompt: "MK-82 GP BOMB의 순폭약량은?",
        options: ["496LBS", "492LBS", "192LBS", "1196LBS"],
        answer: 3,
    },
    {
        prompt: "항공기용 기총과 20MM 탄약에 사용되는 LINK가 서로 맞게 연결된 것은?",
        options: ["M39 GUN - M12 Link", "M61 GUN - M12 Link", "M39 GUN - M12, M14 Link", "M61 GUN - M12, M14 Link"],
        answer: 1,
    },
    {
        prompt: "20MM M56 HEI 탄약의 색채 표기는?",
        options: ["청색 탄체에 백색 표기", "흑색 탄체에 황색 표기", "황색 탄체에 흑색 표기", "국방색 탄체에 흑색 표기"],
        answer: 3,
    },
    {
        prompt: "MK-82 GP BOMB에 사용되는 Conical Fin Type은?",
        options: ["M131", "MAU-93", "BSU-49", "MAU-94"],
        answer: 2,
    },
    {
        prompt: "ATU-35 Drive Assembly 장착 시 TAB의 굽힘 정도는?",
        options: ["120° 이상", "90° 이상", "60° 이상", "45° 이상"],
        answer: 4,
    },
    {
        prompt: "MK- 82 GP BOMB의 주기검사 주기는?",
        options: ["3년", "5년", "7년", "10년"],
        answer: 4,
    },
    {
        prompt: "MK-82 GP BOMB 무게의 몇 %가 순폭약량의 무게인가?",
        options: ["56", "46", "36", "26"],
        answer: 3,
    },
    {
        prompt: "MK-82 GP BOMB의 전·후방 Adapter Booster Type는?",
        options: ["M148, M147", "M904, M905", "M904, FMU-54", "FMU-26, FMU-54"],
        answer: 1,
    },
    {
        prompt: "MK-82 BOMB의 후방 신관의 화재 기호 및 혼합저장 그룹은?",
        options: ["1.1D", "1.1E", "1.2D", "1.2E"],
        answer: 3,
    },
    {
        prompt: "GP BOMB에서 SUSPENSION LUG, BOOSTER, FIN을 장착하는 곳은?",
        options: ["ARMING WIRE", "FUZE", "BOMB BODY", "WING"],
        answer: 3,
    },
    {
        prompt: "GP BOMB 구성품 중 HIGH DRAG TYPE, LOW DRAG TYPE으로 투하 후 비행자세 유지하는 것은?",
        options: ["FIN", "FUZE", "BOMB BODY", "ARMING WIRE"],
        answer: 1,
    },
    {
        prompt: "20MM T.P에 사용되는 CARTRIDGE 계열은 무엇인가?",
        options: ["M55계열", "M220계열", "M53계열", "M56계열"],
        answer: 1,
    },
    {
        prompt: "M904 FUZE의 사용되는 M9 DELAY 몇 가지로 분류되는가?",
        options: ["4", "6", "8", "10"],
        answer: 2,
    },
    {
        prompt: "GP BOMB에 NOSE YELLOW BAND가 1 INCH일 때 MAIN CHARGE는?",
        options: ["COMP' B", "T.N.T", "TRITONAL", "M9"],
        answer: 2,
    },
    {
        prompt: "GP BOMB에 NOSE YELLOW BAND가 2 INCH일 때 MAIN CHARGE는?",
        options: ["T.N.T", "TRITONAL", "MB", "COMP' B"],
        answer: 4,
    },
    {
        prompt: "GP BOMB에 NOSE YELLOW BAND가 3 INCH일 때 MAIN CHARGE는?",
        options: ["TRITONAL", "COMP' B", "M9", "T.N.T"],
        answer: 1,
    },
    {
        prompt: "MK-82 DUMMY BOMB의 주요 충진물은?",
        options: ["가스", "물", "기름", "시멘트"],
        answer: 4,
    },
    {
        prompt: "투하 및 발사 방식에 의한 MK-82 GP BOMB의 분류는?",
        options: ["공대공용", "공대지용", "지대지용", "지대공용"],
        answer: 2,
    },
    {
        prompt: "MK-82 GP BOMB의 Nose Adapter Booster TYPE은?",
        options: ["M148", "M147", "M339", "M129"],
        answer: 1,
    },
    {
        prompt: "MK-82 GP BOMB의 Tail Adapter Booster TYPE은?",
        options: ["M148", "M147", "M339", "M129"],
        answer: 2,
    },
    {
        prompt: "MK-82 탄체검사중 FUZE WELL의 나사산이 몇개 이상 손상 되었을 때 폭탄을 폐기하는가?",
        options: ["1개", "2개", "3개", "나사산 손상이 있더라도 정상조립이 가능하고 유격이 없다면 상관없다"],
        answer: 3,
    },
    {
        prompt: "IMPULSE CARTRIDGE 검사종류 중 불필요한 검사는 무엇인가?",
        options: ["SMI", "PI", "SI", "RI"],
        answer: 1,
    },
    {
        prompt: "MK-82 신관 취급시 개봉전/개봉후에 따라 저장 수명이 달라지는데 FUZE, BOMB, NOSE M905 SERIES의 저장 수명으로 알맞은 것은?",
        options: ["30년/INDEF", "47년/INDEF", "70년/INDEF", "80년/INDEF"],
        answer: 2,
    },
    {
        prompt: "다음은 IMPULSE CARTRIDGE 불출시 우선불출될 품목들이다. 적합하지 않은것은 무엇인가?",
        options: ["가장 오래된 품목", "가장 최신 품목", "LITE 품목", "SEAL 파손"],
        answer: 2,
    },
    {
        prompt: "KCCU-44/B CARTRIDGE의 주기검사 주기가 맞는것은?",
        options: ["1년", "3년", "5년", "7년"],
        answer: 3,
    },
    {
        prompt: "MK-82 탄체검사중 LUG WELL의 나사산이 몇% 이상 손상 되었을 때 폭탄을 폐기하는가?",
        options: ["5% 이상", "10%이상", "20%이상", "30%이상"],
        answer: 4,
    },
    {
        prompt: "MK-82 신관 취급시 개봉전/개봉후에 따라 저장 수명이 달라지는데 FUZE, BOMB, NOSE M904 SERIES의 저장 수명으로 알맞은 것은?",
        options: ["50년/INDEF", "70년/INDEF", "80년/INDEF", "100년/INDEF"],
        answer: 1,
    },
    {
        prompt: "MK-82 탄체검사중 중대 부식, 뭉쳐진 녹 또는 패임이 폭탄본체의 몇% 이상 발견되었을 때 도장작업을 수행 해야 하는가?",
        options: ["10% 이상", "20% 이상", "30% 이상", "50% 이상"],
        answer: 4,
    },
    {
        prompt: "MK-82 폭탄은 목재/금속 팔레트 당 몇개씩 포장되어 금속 밴딩을 하는가?",
        options: ["6개", "4개", "2개", "1개"],
        answer: 1,
    },
    {
        prompt: "대량탄약 조립장비 조립 기준시간은?",
        options: ["1시간이내", "2시간이내", "3시간이내", "4시간이내"],
        answer: 2,
    },
    {
        prompt: "MJU-7의 BARRIER BAG이 부풀려져 있다면 조치사항은 무엇인가?",
        options: ["REJECT", "REPAIR", "REPLACE", "REMOVE"],
        answer: 2,
    },
    {
        prompt: "BBU-35 CTG의 저장/사용수명이 만기되었다면 조치사항은 무엇인가?",
        options: ["REPAIR", "REJECT", "REPLACE", "REMOVE"],
        answer: 2,
    },
    {
        prompt: "KCCU-44/B CARTRIDGE의 개봉 후 수명은?",
        options: ["24개월", "36개월", "48개월", "60개월"],
        answer: 2,
    },
    {
        prompt: "MHU-141 TRL'의 TIRE 압력은?",
        options: ["50 PSI", "55 PSI", "60 PSI", "65 PSI"],
        answer: 1,
    },
    {
        prompt: "KMHU-5500 탄약운반 트레일러에 적재할 수 있는 최대무게는?",
        options: ["5000LBS", "5500LBS", "6000LBS", "6500LBS"],
        answer: 2,
    },
    {
        prompt: "M904, M905 FUZE에 사용되는 DELAY TYPE은?",
        options: ["M7 DELAY", "M8 DELAY", "M9 DELAY", "M10 DELAY"],
        answer: 3,
    },
    {
        prompt: "M904, M905 FUZE의 포장 및 비포장 DROP 제한 높이는?",
        options: ["5FT, 1FT", "6FT, 1FT", "5FT, 2FT", "6FT, 2FT"],
        answer: 2,
    },
    {
        prompt: "M907 NOSE FUZE의 포장 및 비포장 DROP 제한 높이는?",
        options: ["5FT/6INCH", "6FT/5FT", "6FT/ANY DISTANCE", "6FT/2FT"],
        answer: 3,
    },
    {
        prompt: "화재 기호판의 색채 표기는?",
        options: ["백색 바탕에 흑색 표기", "황색 바탕에 적색 표기", "주황색 바탕에 흑색 표기", "백색 바탕에 적색 표기"],
        answer: 3,
    },
    {
        prompt: "탄약 상태부호 중 사용 불가는 품목을 나타내는 부호는?",
        options: ["H", "B", "C", "A"],
        answer: 1,
    },
    {
        prompt: "BDU-33에 들어가는 SIGNAL은?",
        options: ["MK-1 SIGNAL", "MK-2 SIGNAL", "MK-4 SIGNAL", "MK-9 SIGNAL"],
        answer: 3,
    },
    {
        prompt: "BDU-33D/B의 주기검사 시 필요한 기술 도서가 아닌 것은?",
        options: ["11A-10", "11A3-3-7", "11A1-5-7", "11A-1-46"],
        answer: 3,
    },
    {
        prompt: "CXU-3A/B의 저장 및검사에 필요한 기술도서는?",
        options: ["11A-1-1", "11A-1-40", "11A3-3-7", "11A-1-60"],
        answer: 3,
    },
    {
        prompt: "BDU-33 SIGNAL CXU-3A/B의 포장재료는?",
        options: ["외부 포장은 나무로 되어있다", "외부 포장은 종이로 되어있다", "외부 포장은 강화 플라스틱으로 되어 있다", "외부 포장은 철재 상자로 되어있다"],
        answer: 4,
    },
    {
        prompt: "CART' CHAFF RR-170A/A의 주기검사는 주기는 몇 년인가?",
        options: ["2년", "5년", "7년", "10년"],
        answer: 2,
    },
    {
        prompt: "폭발물의 옥외 저장이 가능한 것 중 맞지 않는 것은?",
        options: ["크기 관계로 탄약고에 입고 및 저장 불가능한 탄약", "저장 시설 부족으로 일시적 저장할 경우", "긴급 상황에서의 불출", "소구경 탄약"],
        answer: 4,
    },
    {
        prompt: "폭발물 작업 건물에 페인트 저장 시 주의 사항으로 잘못된 것은?",
        options: ["직사광선 및 고온 노출을 피한다", "1개 이상 소화기 비치한다", "페인트 저장량은 45갤런 초과할 수 없다", "페인트 저장된 장소에서 흡연을 금지한다"],
        answer: 3,
    },
    {
        prompt: "다음 중 탄약 혼합 저장 시 고려 사항이 아닌 것은?",
        options: ["작업 능률", "내, 외부 포장상태", "순 폭약략(NEW)", "화학적 및 물리적 성질"],
        answer: 1,
    },
    {
        prompt: "탄약고 및 탄약 정비시설의 출입문 게시 내용과 거리가 먼 것은?",
        options: ["작업허용 인원수", "위험 급수", "현 저장량", "최대저장량"],
        answer: 3,
    },
    {
        prompt: "폭발물 저장 지역의 요구사항으로 맞지 않는 것은?",
        options: ["폭발물 저장위치는 안전거리 기준을 따라야 한다", "방화지대 설정, 운영에 따라 수목을 제거하여 화재를 예방토록 한다", "이글루형 탄약고 흙 지붕 두께는 최소 24FT 유지하여 화재위험이나 침식으로부터 보호한다", "탄약고 주변 배수로는 적절한 배수와 보수작업이 가능하도록 설치되어야 한다."],
        answer: 3,
    },
    {
        prompt: "MJU-7/B에 사용되는 CARTRIDGE의 종류는?",
        options: ["BBU-35/B", "BBU-36/B", "ARD863-1", "ARD449-1"],
        answer: 2,
    },
    {
        prompt: "방벽의 효과에 대한 설명 중 틀린 것은?",
        options: ["방벽의 높이보다 더 높게 비산되는 파편에도 효과가 있다", "노출 인원이 밀집되어있는 지역에서는 효과적이다", "방벽은 폭발물 저장고와 주거시설 사이의 무방비지역에 있어서의 파편의 밀도를 감소할 수 있다", "방벽은 대량폭발 시 폭풍효과를 방지할 수 없다"],
        answer: 1,
    },
    {
        prompt: "탄약이 정상 기능을 발휘하지 못하고 각종 형태의 불발, 조기·지연 폭발, 비정상적인 폭발·연소, 조명 불능, 파열·파손, 구성품 이탈 등 비정상적인 상태의 탄약은?",
        options: ["악작용 탄약", "초과탄약", "전투예비탄약", "기본휴대탄약"],
        answer: 1,
    },
    {
        prompt: "탄약고의 출입문 관리사항으로 맞지 않는 것은?",
        options: ["환기 시 및 탄약고 내 작업 인원 잔류 시를 제외하고 항상 잠겨져야 한다", "탄약고 폭발물 취급 시 안전준수 사항을 작업 인원이 잘 볼 수 있는 곳에 게시하여야 한다", "출입문이 2개 이상인 탄약고 내에서는 작업 시 1개 출입문을 개방하여야 한다", "탄약고 내 작업 시 작업 인원은 출입문 쪽 통로를 개방한 후 작업하여야 한다"],
        answer: 3,
    },
    {
        prompt: "인화성 물질의 저장 시 탄약고로부터 격리 거리는?",
        options: ["100FT", "150FT", "180FT", "200FT"],
        answer: 1,
    },
    {
        prompt: "탄약고, 탄약 정비시설의 출입문 안쪽에 작업 요원이 볼 수 있도록 기록한 표지를 게시하여야 한다. 여기에 들어갈 내용이 아닌 것은?",
        options: ["작업 허용 인원수", "최대 폭약 저장량", "위험 급수", "탄약 종류"],
        answer: 4,
    },
    {
        prompt: "탄약의 상태부호 C를 가장 적절하게 설명한 것은?",
        options: ["수리르 요하는 품목", "제한없이 불출 가능 품목", "제한적 불출 가능 품목", "우선 불출 품목"],
        answer: 4,
    },
    {
        prompt: "다음중 폭발물의 분해 및 개조하는 작업이 가능한 경우가 아닌 것은?",
        options: ["기술지시(T.O)에 인가되었을 경우", "공군본부 및 작전, 군수사령부의 지시 및 승인이 있을 경우", "긴급 폭발물처리(EOD) 과정에서 분해가 요구될 경우", "대대장의 지시 및 승인이 있을 경우"],
        answer: 4,
    },
    {
        prompt: "탄약의 순폭약량을 나타내는 용어는?",
        options: ["WEIGHT", "NEW", "NET", "NOW"],
        answer: 2,
    },
    {
        prompt: "폭발물 저장지역에서는 몇 FT 이내에서 사냥이 금지되어 있는가?",
        options: ["1,200FT", "1,300FT", "1,400FT", "1,500FT"],
        answer: 1,
    },
    {
        prompt: "두 탄약고 사이에 격리되어야 할 최소한의 허용 거리는?",
        options: ["주거시설 거리", "내부격리 거리", "탄약고 간 거리", "파편 거리"],
        answer: 3,
    },
    {
        prompt: "폭발 시 다량의 파편 발생 위험이 있는 품목의 위험 등급은?",
        options: ["1.1급", "1.2급", "1.3급", "1.4급"],
        answer: 2,
    },
    {
        prompt: "다음 중 탄약의 검사 종류가 아닌 것은?",
        options: ["주기 검사", "수령 검사", "주의 검사", "특별 검사"],
        answer: 3,
    },
    {
        prompt: "해당 T.O에 의거 일정한 주기에 따라 수행하는 검사는?",
        options: ["주기 검사", "수령 검사", "불출전 검사", "특별 검사"],
        answer: 1,
    },
    {
        prompt: "사용 부서로부터 반납된 탄약에 대한 포장상태 및 사용 가능 여부를 점검하는 검사는?",
        options: ["주기 검사", "수령 검사", "불출전 검사", "반납탄약 검사"],
        answer: 4,
    },
    {
        prompt: "안전사항에 관련하여 상급부대의 지시에 의거 수행하는 검사는?",
        options: ["주기 검사", "수령 검사", "불출전 검사", "특별 검사"],
        answer: 4,
    },
    {
        prompt: "폭발물 안전기준 적용유보 및 면제요구서의 보고 기간은?",
        options: ["1년", "2년", "3년", "4년"],
        answer: 2,
    },
    {
        prompt: "전기 뇌관 탄약 취급 시 가장 먼저 실시하는 정비 행위는?",
        options: ["접지", "검사", "수리", "정비"],
        answer: 1,
    },
    {
        prompt: "폭발물 저장지역 흡연 장소 구비조건이 아닌 것은?",
        options: ["재떨이 준비", "폭발물이 적재된 모든 차량, 트레일러, 철도차량, 물자 취급, 장비에 16M(50FT) 이내에선 흡연 가능", "손상이 없는 라이터 고정 비치", "적어도 1개 이상의 휴대용 소화기 비치"],
        answer: 2,
    },
    {
        prompt: "다음중 GCS와 관련이 없는 한가지는 어떤 것인가?",
        options: ["Dome Cover", "Umbilical Cable", "Cap Screw", "Break Away Screw"],
        answer: 3,
    },
    {
        prompt: "다음중 T/D 분해 작업시 소요되는 공구가 아닌 것은?",
        options: ["Speed Handle", "TWO WAY TOOL", "Wrench Assembly", "Strip Wrench"],
        answer: 1,
    },
    {
        prompt: "적재된 MISSILE의 S&A DEVICE가 \"ARM\" 상태이다 적절한 조치 사항은?",
        options: ["접지한다", "Warhead를 분리한다", "Fuze Cover장착상태를 확인한다", "Arming Key를 조작하여 Safe상태로 한다"],
        answer: 4,
    },
    {
        prompt: "다음중 GCS DOME 세척시 적절하지 않은 세척물은 어떤 것인가?",
        options: ["알코올", "융", "M.E.K.", "렌즈 페이퍼"],
        answer: 3,
    },
    {
        prompt: "다음중 MISSILE 운반장비가 아닌 것은?",
        options: ["M-4 TRL", "M-J", "MHU-12", "M-141"],
        answer: 2,
    },
    {
        prompt: "AIM-9P4 MSL과 AIM-9P3 MSL를 구분 하는 기준은 어떤 것인가?",
        options: ["GCS", "Warhead", "Canard", "Rocket Motor"],
        answer: 1,
    },
    {
        prompt: "다음중 MK54 WARHEAD의 수리 부속이 아닌 것은 어떤 것인가?",
        options: ["Clamp", "Spring", "Cap Screw", "O-RING"],
        answer: 4,
    },
    {
        prompt: "다음 MISSILE의 부분품 중 화재 및 폭발의 위험이 없는 부분품은 어떤 것인가?",
        options: ["GCS", "WARHEAD", "WING", "ROCKET MOTOR"],
        answer: 3,
    },
    {
        prompt: "완성탄으로부터 GCS를 분해하는 과정 중 옳은 것은?",
        options: ["GCS는 고복성 화약이 충진되어있으므로 방호 차폐벽 뒤에서 작업한다", "고정된 GCS를 푸는과정에서 떨어지지 않도록 한명의 작업자가 단단히 붙잡고 있어야 한다", "GCS 분해 공구는 TORQUE WRENCH이다", "GCS를 분해하기전 먼저 WARHEAD부터 분해한다"],
        answer: 2,
    },
    {
        prompt: "AIM-9P를 조립하기 위한 특수 공구가 아닌 것은?",
        options: ["Alignment Tool", "Spanner Attachment", "Wrench Assembly", "Hammer"],
        answer: 4,
    },
    {
        prompt: "GCS SQUIB 저항치를 검사하는 장비는 무엇인가?",
        options: ["MEGOHMETER", "620A-4", "MULTIMETER", "AN/ASM-447"],
        answer: 2,
    },
    {
        prompt: "AIM-9L/S/M/P MSL에 사용되며 Gas Grain이 점화되는 것을 방지해 주는 것은?",
        options: ["CAPTIVE FLIGHT ADAPTER", "ARMING KEY", "HEAD-UP DISPLAY ADAPTER", "SAFE & ARMING DEVICE"],
        answer: 1,
    },
    {
        prompt: "AGM-65 기능점검시 사용되는 장비가 아닌것은?",
        options: ["SM-787/DSM", "AN/DSM-157", "MTS-206", "PTS-15"],
        answer: 4,
    },
    {
        prompt: "CATEGORY \"B\" MSL의 주기검사 기간은 언제인가?",
        options: ["720 DAYS", "7 DAYS", "60 DAYS", "30 DAYS"],
        answer: 1,
    },
    {
        prompt: "AIM-9L/S/M COUPLING RING 조립시 RING이 완전히 장착되도록 사용되는 특수공구는 무엇인가?",
        options: ["TUBE SPANNER", "SPEED HANDLE", "WRENCH, SPANNER", "CHAIN WRENCH"],
        answer: 4,
    },
    {
        prompt: "AIM-9 Rocket Motor에 조립되는 WING의 수량은?",
        options: ["1 EA", "2 EA", "3 EA", "4EA"],
        answer: 4,
    },
    {
        prompt: "AIM-9L/S/M GCS UMBILICAL CABLE SPRING PIN 교체시 사용되는 특수공구는 무엇인가?",
        options: ["C-CLAMP", "SPEED HANDLE", "TUBE SPANNER", "CHAIN WRENCH"],
        answer: 1,
    },
    {
        prompt: "AIM-9L/S/M GCS를 T/D에 조립시 먼저 장착되어야 하는 CONNECTOR는?",
        options: ["UMBILICAL CABLE", "9-PIN", "128-PIN", "COUPLING"],
        answer: 2,
    },
    {
        prompt: "AIM-9L/S/M ROCKET MOTOR FWD HANGR CONTACT BUTTON의 TORQUE 수치는?",
        options: ["7+-1 IN LB", "12+1 IN LB", "40+-8 IN OZ", "80+-8 IN OZ"],
        answer: 1,
    },
    {
        prompt: "다음 중 ROLLERON TIE DOWN 시 사용되는 것은?",
        options: ["TORQUE W/H", "TWO WAY TOOL", "SCREW DRIVER", "TENSIOMETER"],
        answer: 4,
    },
    {
        prompt: "AIM-9 MISSILE 조립 후 형태(type) 표기를 하는 구성품은?",
        options: ["GCS", "Warhead", "Fuze", "Rocket Motor"],
        answer: 1,
    },
    {
        prompt: "AIM-9P Rocket Motor가 화재에 휩싸일 경우 최소 대피거리는?",
        options: ["300 FEET", "400 FEET", "500 FEET", "600 FEET"],
        answer: 4,
    },
    {
        prompt: "AIM-9 MSL'의 SR-116계열 ROCKET MOTOR의 폭약 종류는?",
        options: ["PBX", "HBX", "HTPB", "CBX"],
        answer: 3,
    },
    {
        prompt: "AIM-9 MSL'의 운반시 최소 필요인원은?",
        options: ["1인", "3인", "8인", "답 없음"],
        answer: 2,
    },
    {
        prompt: "Warhead의 Shelf Life는?",
        options: ["1년", "2년", "3년", "INDEF"],
        answer: 4,
    },
    {
        prompt: "SR116-HP-1 Rocket Motor의 직경은?",
        options: ["0.192\"", "5\"", "0.125\"", "2.75\""],
        answer: 2,
    },
    {
        prompt: "AIM-9M 조립시 FIN은 미사일의 어느 구성품에 조립하는가?",
        options: ["GCS", "W/H", "WING", "R/M"],
        answer: 1,
    },
    {
        prompt: "AIM-9M 조립시 WING은 미사일의 어느 구성품에 조립하는가?",
        options: ["GCS", "W/H", "R/M", "T/D"],
        answer: 3,
    },
    {
        prompt: "GCS에 조립되는 WING의 수량은?",
        options: ["4개", "3개", "2개", "1개"],
        answer: 1,
    },
    {
        prompt: "다음중 WDU-17/B WARHEAD의 직경은?",
        options: ["5\"", "10\"", "20\"", "2.75\""],
        answer: 1,
    },
    {
        prompt: "유도무기의 회전을 감소시켜 비행 시 안전성을 높이는 구성품은?",
        options: ["Canard", "Gyro", "Wing Assembly", "Target Detector"],
        answer: 3,
    },
    {
        prompt: "AIM-9P R/M를 검사 비포장상태에서 이동중 떨어뜨렸을경우 사용불가능한 높이는?",
        options: ["0.5 FEET", "1.5 FEET", "2.5 FEET", "3.5 FEET"],
        answer: 2,
    },
    {
        prompt: "유도탄 분해 시 가장 먼저 수행해야 할 일은?",
        options: ["접지를 한다", "GCS를 분해한다", "WING을 분해한다", "WARHEAD를 분해한다"],
        answer: 1,
    },
    {
        prompt: "AIM-9P를 TRAILER에 2층으로 적재가 가능하도록 사용하는 ADAPTER SET는?",
        options: ["MHU-25", "M-4", "M-9", "M-12"],
        answer: 3,
    },
    {
        prompt: "AIM-9P를 TRAILER에 6발까지 적재가 가능하도록 사용하는 ADAPTER SET는?",
        options: ["MHU-25", "M-4", "M-9", "M-12"],
        answer: 1,
    },
    {
        prompt: "CPT의 5,000 PSIG 압력 충전 구간의 GAGE 색상은 무엇인가?",
        options: ["RED", "YELLOW", "ORANGE", "GREEN"],
        answer: 4,
    },
    {
        prompt: "AIM-9P MISSILE에 조립되는 TARGET DETECTOR의 수량은?",
        options: ["1개", "2개", "3개", "4개"],
        answer: 1,
    },
    {
        prompt: "AIM-9 MISSILE 검사용으로 사용되는 확대경의 배율은?",
        options: ["2배 이상", "4배 이상", "8배 이상", "10배 이상"],
        answer: 4,
    },
    {
        prompt: "AIM-9 MISSILE GC가 수신하는 SIGNAL은?",
        options: ["LASER", "C.W DOPPLER", "X-RAY", "I.R."],
        answer: 4,
    },
    {
        prompt: "다음중 MK 36 MOD 11 ROCKET MOTOR의 파트 중 교환이 가능한 것은?",
        options: ["SAD", "FWD HANGER", "NOZZLE", "폭약"],
        answer: 2,
    },
    {
        prompt: "1.4급에 해당하는 탄약고내 작업이 아닌것은?",
        options: ["폭발물의 검사와 유지", "포장을 풀거나 점검", "수리", "탄약 비군사화 품목 처리"],
        answer: 4,
    },
    {
        prompt: "다음 중 AIM-9P MISSILE의 구성품이 될 수 없는 것은?",
        options: ["MK54 MOD4", "DSU-21/B", "MK8", "M904"],
        answer: 4,
    },
    {
        prompt: "AIM-9P WING의 UNCAGE 검사시 허용할 수 있는 한계는?",
        options: ["10~30 LBS", "30~50 LBS", "35~50 LBS", "20~35 LBS"],
        answer: 4,
    },
    {
        prompt: "GCS를 크게 세 부분으로 나눌 때 틀린 것은?",
        options: ["Umbilical Cable", "Seeker", "Electronic", "Servo"],
        answer: 1,
    },
    {
        prompt: "다음 중 GCS SERVO ASSEMBLY의 구성부가 아닌 것은?",
        options: ["Gas Generator", "Turbo Alternator", "Booster", "Missile Steering System"],
        answer: 3,
    },
    {
        prompt: "AGM-65 PAS는 떨어뜨리면 안되는 이유는 어떤 가스가 있기 때문인가?",
        options: ["헬륨", "질소", "산소", "수소"],
        answer: 1,
    },
    {
        prompt: "AIM-9P MISSILE이 적기 근처에서 WARHEAD를 폭발시키는 것은?",
        options: ["CANARD", "GCS", "ROCKET MOTOR", "TARGET DETECTOR"],
        answer: 4,
    },
    {
        prompt: "MISSILE 발사 후 전원을 발생 공급하여 주는 기능을 가진 것은?",
        options: ["WING", "FUZE COVER", "BOOSTER", "TURBO GENERATOR"],
        answer: 4,
    },
    {
        prompt: "WING & ROLLERON TENSIOMETER의 점검 허용치는 얼마인가?",
        options: ["85 LBS", "45~65 LBS", "100 LBS", "22~28 LBS"],
        answer: 4,
    },
    {
        prompt: "다음중 Rocket Motor의 화재 등급은?",
        options: ["1.1", "1.2", "1.3", "1.4"],
        answer: 3,
    },
    {
        prompt: "다음 중 GCS를 구성하고 있는 부품이 아닌 것은?",
        options: ["Gas Generator", "Umbilical Cable", "Booster", "Dome"],
        answer: 3,
    },
    {
        prompt: "GCS의 Umbilical Cable Block에 Spring Pin은 몇 개가 장착되는가?",
        options: ["1개", "2개", "4개", "8개"],
        answer: 1,
    },
    {
        prompt: "GCS의 충격으로부터 DOME파손을 방지하기위해 장착되는 안전장치는?",
        options: ["Dome Cover", "Dust Cap", "Clip", "Flag"],
        answer: 1,
    },
    {
        prompt: "AGM-65 Unpacking 시 컨테이너 뚜껑을 열기전 가장 먼저해야할 것은?",
        options: ["내외부 압력일치", "접지", "컨테이너 세척", "기능점검"],
        answer: 1,
    },
    {
        prompt: "AGM-65 구성품으로 목표물 감지, 추적, 유도를 담당하는 것은?",
        options: ["GCS", "CAS", "WARHEAD", "PAS"],
        answer: 1,
    },
    {
        prompt: "AGM-65 발사대인 LAU-117 장탈착중 MRD ALIGN시 사용되는 HINGE의 SIZE는?",
        options: ["1/4 INCH", "1/2 INCH", "3/8 INCH", "3/4 INCH"],
        answer: 3,
    },
    {
        prompt: "다음중 CATM의 180DAY 점검항목이 아닌 것은?",
        options: ["조립부위 분해", "GCS 기능점검", "부분품 NDI", "Target Detector 저항검사"],
        answer: 4,
    },
    {
        prompt: "다음중 AIM-9P MISSILE의 접지부가 될 수 없는 곳은?",
        options: ["전방 HANGER", "R/M의 도장안된 외피", "중앙 HANGER", "후방 HANGER"],
        answer: 3,
    },
    {
        prompt: "AIM-9P Missile에 Contact Button이 장착된 부분은 어디인가?",
        options: ["WARHEAD", "TARGET DETECTOR", "GCS", "ROCKET MOTOR"],
        answer: 4,
    },
    {
        prompt: "AN/ASM-447 장비로 점검하는 MISSILE의 부분품은 어떤 것인가?",
        options: ["GCS", "Warhead", "Rocket Motor", "Target Detector"],
        answer: 1,
    },
    {
        prompt: "SR116 Rocket Motor의 WING ASSY 조립 SCREW 수는 모두 몇개인가?",
        options: ["10개", "20개", "30개", "40개"],
        answer: 2,
    },
    {
        prompt: "다음중 AIM-9P MISSILE에서 3단 TORQUE 하는 것은?",
        options: ["WARHEAD SCREW", "WING SCREW", "CANARD SCREW", "BREAK-AWAY SCREW"],
        answer: 1,
    },
    {
        prompt: "다음중 AIM-9P에서 TORQUE치가 가장 높은 것은?",
        options: ["WARHEAD SCREW", "GCU SURFACE SCREW", "CANARD SCREW", "BREAK-AWAY SCREW"],
        answer: 2,
    },
    {
        prompt: "AGM-65G/G2 WARHEAD에는 몇 파운드의 폭약이 충전되어 있는가?",
        options: ["125", "150", "200", "300"],
        answer: 4,
    },
    {
        prompt: "AGM-65를 세척하기위해 사용하는 솔벤트 사용시 착용해야 하는 안전장구가 아닌 것은?",
        options: ["보호안경", "고무장갑", "고무신", "방독마스크"],
        answer: 3,
    },
    {
        prompt: "AIM-9 MSL이 발사되어 비행하는 동안 ROLL, PITCH, YAW를 최소화 시켜주는 장치는?",
        options: ["WING & ROLLERON", "FIN", "TARGET DETECTOR", "CANARD"],
        answer: 1,
    },
    {
        prompt: "AIM-9 미사일을 M-9 Adapter 이용 적재시 2층에 적재되는 AIM-9 수량은?",
        options: ["4발", "5발", "6발", "2발"],
        answer: 3,
    },
    {
        prompt: "AIM-9 미사일을 M-9 Adapter 이용 적재시 Hanger를 기준으로 몇시 방향으로 적재하여야 하는가?",
        options: ["10시", "9시", "8시", "1시"],
        answer: 4,
    },
    {
        prompt: "AIM-9L/S/M CPT 검사시 압력이 얼마 이하일경우 충전하여야 하는가?",
        options: ["3000 PSI", "4000 PSI", "4500 PSI", "6000 PSI"],
        answer: 2,
    },
    {
        prompt: "다음중 WARHEAD의 화재등급은 어떤 것인가?",
        options: ["1.2", "1.1", "1.4", "1.3"],
        answer: 2,
    },
    {
        prompt: "AIM-9M GCS CPT Cover Screw는 몇개로 고정되는가?",
        options: ["1개", "2개", "3개", "4개"],
        answer: 3,
    },
    {
        prompt: "AIM-9M GCS기능점검시 장착해야하는 것에 속하지 않는 것은?",
        options: ["TD COVER", "9 PIN", "15 PIN", "UMBILICAL CABLE"],
        answer: 1,
    },
    {
        prompt: "AIM-9M GCS에 냉각가스를 공급해주는 구성품은?",
        options: ["FIN ADAPTER", "WING", "CPT", "TD"],
        answer: 3,
    },
    {
        prompt: "AIM-9M 완성탄 미사일의 접지 부위는?",
        options: ["WING RIB", "GCS", "FIN", "TD"],
        answer: 1,
    },
    {
        prompt: "DSU-21/B TARGET DETECTOR의 조립 접합부 검사에 사용하는 장비는?",
        options: ["현미경", "확대경", "GAS TESTER", "TENSIOMETER"],
        answer: 2,
    },
    {
        prompt: "AIM-9P 유도무기 정비/점검과 상관없는 장비는 다음중 어떤 것인가?",
        options: ["620A-4", "AN/ASM-447", "FTS", "MULTIMETER"],
        answer: 4,
    },
    {
        prompt: "AIM-9M 조립시 구성품 보호 COVER가 필요한 구성품은 무엇인가?",
        options: ["TARGET DETECTOR", "WING", "FIN", "R/M"],
        answer: 1,
    },
    {
        prompt: "다음 부분품중 1인 운반이 불가능한 것은 어떤 것인가?",
        options: ["GCS", "ROCKET MOTOR", "WARHEAD", "TARGET DETECTOR"],
        answer: 2,
    },
    {
        prompt: "다음중 Captive Air Training Missile에서 LIVE 구성품은 무엇인가?",
        options: ["WARHEAD", "GCS", "ROCKET MOTOR", "TARGET DETECTOR"],
        answer: 2,
    },
    {
        prompt: "Captive Air Training Missile의 색채 표기는 다음 중 어떤 것인가?",
        options: ["적색", "청색", "황색", "녹색"],
        answer: 2,
    }
]

const quizEl = document.forms["quiz"];
const quizIndexEl = quizEl.elements["quiz-index"];
const quizProblemEl = quizEl.elements["quiz-problem"];

const updateQuiz = () => {
    const index = quizIndexEl.value - 1;
    const prompt = problems[index].prompt;
    const options = problems[index].options;
    const answer = problems[index].answer;

    const promptP = document.createElement("p");
    promptP.innerText = "PROMPT: " + prompt;
    const optionsOl = document.createElement("ol");
    options.forEach(option => {
        const li = document.createElement("li");
        li.innerText = option;
        optionsOl.appendChild(li);
    })
    const answerP = document.createElement("p");
    answerP.innerText = "ANSWER: " + answer;

    quizProblemEl.replaceChildren(promptP, optionsOl, answerP);
}

quizEl.addEventListener("input", updateQuiz);
updateQuiz();
