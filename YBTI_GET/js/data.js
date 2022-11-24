/*
AXI = 0
AXJ = 1
AYI = 2
AYJ = 3
BXI = 4
BXJ = 5
BYI = 6
BYJ = 7
*/

const qnaList = [
  {
    q: '1. 여행갈 때 호텔에 있기보다 이곳저곳 갔으면 좋겠다. ',
    a: [
      { answer: '매우 그렇다', typ:[0,5] },
      { answer: '그렇다', typ:[0,4] },
      { answer: '조금 그렇다', typ:[0,3]},
      { answer: '조금 아니다', typ:[0,2]},
      { answer: '아니다', typ:[0,1]},
      { answer: '매우 아니다', typ:[0,0]},
    ],
  },
  {
    q: '2. 해외 여행에서 인당 200만원은 적은 돈이다. ',
    a: [
      { answer: '매우 그렇다', typ:[1,5] },
      { answer: '그렇다', typ:[1,4] },
      { answer: '조금 그렇다', typ:[1,3] },
      { answer: '조금 아니다', typ:[1,2]},
      { answer: '아니다', typ:[1,1] },
      { answer: '매우 아니다', typ:[1,0] },
    ]
  },
  {
    q: '3. 추운듯한 날씨가 좋다. ',
    a: [
      { answer: '매우 그렇다', typ:[2,0] },
      { answer: '그렇다', typ:[2,1]},
      { answer: '조금 그렇다', typ:[2,2]},
      { answer: '조금 아니다', typ:[2,3]},
      { answer: '아니다', typ:[2,4]},
      { answer: '매우 아니다', typ:[2,5] },
    ]
  },
  {
    q: '4. 다른 나라의 역사에 관심이 많다. ',
    a: [
      { answer: '매우 그렇다', typ:[3,0] },
      { answer: '그렇다', typ:[3,1] },
      { answer: '조금 그렇다', typ:[3,2] },
      { answer: '조금 아니다', typ:[3,3] },
      { answer: '아니다', typ:[3,4] },
      { answer: '매우 아니다', typ:[3,5] },
    ]
  },
  {
    q: '5. 놀러갈 때만 되면 기운이 넘친다. ',
    a: [
      { answer: '매우 그렇다', typ:[0,5] },
      { answer: '그렇다', typ:[0,4]},
      { answer: '조금 그렇다', typ:[0,3] },
      { answer: '조금 아니다', typ:[0,2] },
      { answer: '아니다', typ:[0,1] },
      { answer: '매우 아니다', typ:[0,0] },
    ]
  },

  {
    q: '6. 없던 돈이 생기면 일단 지르고 본다. ',
    a: [
      { answer: '매우 그렇다', typ:[1,5] },
      { answer: '그렇다', typ:[1,4]},
      { answer: '조금 그렇다', typ:[1,3] },
      { answer: '조금 아니다', typ:[1,2] },
      { answer: '아니다', typ:[1,1]},
      { answer: '매우 아니다', typ:[1,0]},
    ]
  },
  {
    q: '7. 사계절 중 여름이 제일 좋다. ',
    a: [
      { answer: '매우 그렇다', typ:[2,5] },
      { answer: '그렇다', typ:[2,4] },
      { answer: '조금 그렇다', typ:[2,3] },
      { answer: '조금 아니다', typ:[2,2] },
      { answer: '아니다', typ:[2,1] },
      { answer: '매우 아니다', typ:[2,0] },
    ]
  },
  {
    q: '8. 유적지보다 야경에 관심이 있다. ',
    a: [
      { answer: '매우 그렇다',typ:[3,5] },
      { answer: '그렇다', typ:[3,4]},
      { answer: '조금 그렇다',typ:[3,3]},
      { answer: '조금 아니다', typ:[3,2]},
      { answer: '아니다', typ:[3,1] },
      { answer: '매우 아니다', typ:[3,0] },
    ]
  },
  {
    q: '9. 자연 풍경이 인위적인 건축물보다 좋다.',
    a: [
      { answer: '매우 그렇다', typ:[0,0] },
      { answer: '그렇다', typ:[0,1] },
      { answer: '조금 그렇다',typ:[0,2] },
      { answer: '조금 아니다', typ:[0,3] },
      { answer: '아니다', typ:[0,4] },
      { answer: '매우 아니다', typ:[0,5] },
    ]
  },
  {
    q: '10. 비행기를 탈 때 비즈니스석 이상으로 탄다. ',
    a: [
      { answer: '매우 그렇다', typ:[1,5]},
      { answer: '그렇다', typ:[1,4] },
      { answer: '조금 그렇다', typ:[1,3] },
      { answer: '조금 아니다', typ:[1,2] },
      { answer: '아니다', typ:[1,1] },
      { answer: '매우 아니다', typ:[1,0] },
    ]
  },
  {
    q: '11. 나는 추위를 더위보다 많이 탄다. ',
    a: [
      { answer: '매우 그렇다', typ:[2,5] },
      { answer: '그렇다', typ:[2,4] },
      { answer: '조금 그렇다', typ:[2,3] },
      { answer: '조금 아니다', typ:[2,2]},
      { answer: '아니다', typ:[2,1] },
      { answer: '매우 아니다', typ:[2,0] },
    ]
  },
  {
    q: '12. 현대적 건축물이 문화재보다 더 좋다. ',
    a: [
      { answer: '매우 그렇다',typ:[3,5] },
      { answer: '그렇다', typ:[3,4] },
      { answer: '조금 그렇다', typ:[3,3] },
      { answer: '조금 아니다', typ:[3,2]},
      { answer: '아니다', typ:[3,1] },
      { answer: '매우 아니다', typ:[3,0] },
    ]
  },
  {
    q: '13. 여행은 놀기 보다는 쉬려고 가는 것이다. ',
    a: [
      { answer: '매우 그렇다', typ:[0,0] },
      { answer: '그렇다', typ:[0,1] },
      { answer: '조금 그렇다', typ:[0,2]},
      { answer: '조금 아니다', typ:[0,3]},
      { answer: '아니다', typ:[0,4]},
      { answer: '매우 아니다', typ:[0,5] },
    ]
  },
  {
    q: '14. 여행에서 원하는 것이 있다면 일단 지르고 본다. ',
    a: [
      { answer: '매우 그렇다', typ:[1,5] },
      { answer: '그렇다', typ:[1,4] },
      { answer: '조금 그렇다', typ:[1,3] },
      { answer: '조금 아니다', typ:[1,2] },
      { answer: '아니다', typ:[1,1] },
      { answer: '매우 아니다', typ:[1,0] },
    ]
  },
  {
    q: '15. 낯선 벌레때문에 더운 도시는 피하고 싶다. ',
    a: [
      { answer: '매우 그렇다', typ:[2,0] },
      { answer: '그렇다', typ:[2,1]},
      { answer: '조금 그렇다', typ:[2,2]},
      { answer: '조금 아니다', typ:[2,3]},
      { answer: '아니다', typ:[2,4]},
      { answer: '매우 아니다', typ:[2,5]},
    ]
  },
  {
    q: '16. 여행을 가면 해당 지역 시장 혹은 박물관은 꼭 간다. ',
    a: [
      { answer: '매우 그렇다', typ:[3,0]},
      { answer: '그렇다', typ:[3,1] },
      { answer: '조금 그렇다', typ:[3,2] },
      { answer: '조금 아니다',typ:[3,3] },
      { answer: '아니다', typ:[3,4]},
      { answer: '매우 아니다', typ:[3,5] },
    ]
  },
  {
    q: '17. 여행에서 얼마나 돌아다니느냐가 중요하다. ',
    a: [
      { answer: '매우 그렇다', typ:[0,1.0] },
      { answer: '그렇다', typ:[0,0.8] },
      { answer: '조금 그렇다', typ:[0,0.6] },
      { answer: '조금 아니다', typ:[0,0.4] },
      { answer: '아니다', typ:[0,0.2] },
      { answer: '매우 아니다', typ:[0,0.0] },
    ]
  },
  {
    q: '18. 여행에서 돈을 얼만큼 쓸 지가 중요하다. ',
    a: [
      { answer: '매우 그렇다', typ:[1,1.0] },
      { answer: '그렇다', typ:[1,0.8] },
      { answer: '조금 그렇다', typ:[1,0.6] },
      { answer: '조금 아니다', typ:[1,0.4] },
      { answer: '아니다', typ:[1,0.2] },
      { answer: '매우 아니다', typ:[1,0.0] },
    ]
  },
  {
    q: '19. 나는 기온에 민감하다. ',
    a: [
      { answer: '매우 그렇다', typ:[2,1.0] },
      { answer: '그렇다', typ:[2,0.8] },
      { answer: '조금 그렇다', typ:[2,0.6] },
      { answer: '조금 아니다', typ:[2,0.4]},
      { answer: '아니다', typ:[2,0.2] },
      { answer: '매우 아니다', typ:[2,0.0] },
    ]
  },
  {
    q: '20. 여행 지역의 문화가 중요하다. ',
    a: [
      { answer: '매우 그렇다', typ:[3,1.0] },
      { answer: '그렇다', typ:[3,0.8] },
      { answer: '조금 그렇다', typ:[3,0.6] },
      { answer: '조금 아니다', typ:[3,0.4]},
      { answer: '아니다', typ:[3,0.2] },
      { answer: '매우 아니다', typ:[3,0.0] },
    ]
  },
]

const infoList = [
  {
    name: '편한게 제일 좋아 HBFC',
    desc: '코로나19와 함께 한 시간이 어느덧 2년이 흘렀습니다. 꽃피는 5월이면 곧 끝날 것ㅜ이라는 희망이 사라지고, 한 해가 지나면 나아질 것이 라는 간절한 바람도 물거품이 되었습니다. 우리는 여전히 코로나19 와 함께 살아가고 있습니다.   코로나19로 인해 해외여행을 떠나지 못하는 사람들이 자연스럽게 국내 여행을 시작했습니다. 코로나19로 인한 우울증, 무기력증, 불안 등을 문화·관광 활동으로 극복해내기 위해서지요. 한국문화관광연구원이 실시한 코로나19 관련 국민 인식 조사 결과를 보면'
  },
  {
    name: '돌아다니는게 제일 좋아 HBFM',
    desc: '코로나19와 함께 한 시간이 어느덧 2년이 흘렀습니다. 꽃피는 5월이면 곧 끝날 것ㅜ이라는 희망이 사라지고, 한 해가 지나면 나아질 것이 라는 간절한 바람도 물거품이 되었습니다. 우리는 여전히 코로나19 와 함께 살아가고 있습니다.   코로나19로 인해 해외여행을 떠나지 못하는 사람들이 자연스럽게 국내 여행을 시작했습니다. 코로나19로 인한 우울증, 무기력증, 불안 등을 문화·관광 활동으로 극복해내기 위해서지요. 한국문화관광연구원이 실시한 코로나19 관련 국민 인식 조사 결과를 보면'
  },
  {
    name: '플렉스가 제일 좋아 HBSC',
    desc: '코로나19와 함께 한 시간이 어느덧 2년이 흘렀습니다. 꽃피는 5월이면 곧 끝날 것ㅜ이라는 희망이 사라지고, 한 해가 지나면 나아질 것이 라는 간절한 바람도 물거품이 되었습니다. 우리는 여전히 코로나19 와 함께 살아가고 있습니다.   코로나19로 인해 해외여행을 떠나지 못하는 사람들이 자연스럽게 국내 여행을 시작했습니다. 코로나19로 인한 우울증, 무기력증, 불안 등을 문화·관광 활동으로 극복해내기 위해서지요. 한국문화관광연구원이 실시한 코로나19 관련 국민 인식 조사 결과를 보면'
  },
  {
    name: '알뜰한게 최고야 HBSM',
    desc: '코로나19와 함께 한 시간이 어느덧 2년이 흘렀습니다. 꽃피는 5월이면 곧 끝날 것ㅜ이라는 희망이 사라지고, 한 해가 지나면 나아질 것이 라는 간절한 바람도 물거품이 되었습니다. 우리는 여전히 코로나19 와 함께 살아가고 있습니다.   코로나19로 인해 해외여행을 떠나지 못하는 사람들이 자연스럽게 국내 여행을 시작했습니다. 코로나19로 인한 우울증, 무기력증, 불안 등을 문화·관광 활동으로 극복해내기 위해서지요. 한국문화관광연구원이 실시한 코로나19 관련 국민 인식 조사 결과를 보면'
  },
  {
    name: '친구와 함께가 좋아 HLFC',
    desc: '코로나19와 함께 한 시간이 어느덧 2년이 흘렀습니다. 꽃피는 5월이면 곧 끝날 것ㅜ이라는 희망이 사라지고, 한 해가 지나면 나아질 것이 라는 간절한 바람도 물거품이 되었습니다. 우리는 여전히 코로나19 와 함께 살아가고 있습니다.   코로나19로 인해 해외여행을 떠나지 못하는 사람들이 자연스럽게 국내 여행을 시작했습니다. 코로나19로 인한 우울증, 무기력증, 불안 등을 문화·관광 활동으로 극복해내기 위해서지요. 한국문화관광연구원이 실시한 코로나19 관련 국민 인식 조사 결과를 보면'
  },
  {
    name: '나 혼자가 좋아 HLFM',
    desc: '코로나19와 함께 한 시간이 어느덧 2년이 흘렀습니다. 꽃피는 5월이면 곧 끝날 것ㅜ이라는 희망이 사라지고, 한 해가 지나면 나아질 것이 라는 간절한 바람도 물거품이 되었습니다. 우리는 여전히 코로나19 와 함께 살아가고 있습니다.   코로나19로 인해 해외여행을 떠나지 못하는 사람들이 자연스럽게 국내 여행을 시작했습니다. 코로나19로 인한 우울증, 무기력증, 불안 등을 문화·관광 활동으로 극복해내기 위해서지요. 한국문화관광연구원이 실시한 코로나19 관련 국민 인식 조사 결과를 보면'
  },
  {
    name: '여행은 역시 밤이지 HLSC',
    desc: '코로나19와 함께 한 시간이 어느덧 2년이 흘렀습니다. 꽃피는 5월이면 곧 끝날 것ㅜ이라는 희망이 사라지고, 한 해가 지나면 나아질 것이 라는 간절한 바람도 물거품이 되었습니다. 우리는 여전히 코로나19 와 함께 살아가고 있습니다.   코로나19로 인해 해외여행을 떠나지 못하는 사람들이 자연스럽게 국내 여행을 시작했습니다. 코로나19로 인한 우울증, 무기력증, 불안 등을 문화·관광 활동으로 극복해내기 위해서지요. 한국문화관광연구원이 실시한 코로나19 관련 국민 인식 조사 결과를 보면'
  },
  {
    name: '여행은 역시 낮이지 HLSM',
    desc: '코로나19와 함께 한 시간이 어느덧 2년이 흘렀습니다. 꽃피는 5월이면 곧 끝날 것ㅜ이라는 희망이 사라지고, 한 해가 지나면 나아질 것이 라는 간절한 바람도 물거품이 되었습니다. 우리는 여전히 코로나19 와 함께 살아가고 있습니다.   코로나19로 인해 해외여행을 떠나지 못하는 사람들이 자연스럽게 국내 여행을 시작했습니다. 코로나19로 인한 우울증, 무기력증, 불안 등을 문화·관광 활동으로 극복해내기 위해서지요. 한국문화관광연구원이 실시한 코로나19 관련 국민 인식 조사 결과를 보면'
  },
  {
    name: '편한게 제일 좋아 TBFC',
    desc: '코로나19와 함께 한 시간이 어느덧 2년이 흘렀습니다. 꽃피는 5월이면 곧 끝날 것ㅜ이라는 희망이 사라지고, 한 해가 지나면 나아질 것이 라는 간절한 바람도 물거품이 되었습니다. 우리는 여전히 코로나19 와 함께 살아가고 있습니다.   코로나19로 인해 해외여행을 떠나지 못하는 사람들이 자연스럽게 국내 여행을 시작했습니다. 코로나19로 인한 우울증, 무기력증, 불안 등을 문화·관광 활동으로 극복해내기 위해서지요. 한국문화관광연구원이 실시한 코로나19 관련 국민 인식 조사 결과를 보면'
  },
  {
    name: '돌아다니는게 제일 좋아 TBFM',
    desc: '코로나19와 함께 한 시간이 어느덧 2년이 흘렀습니다. 꽃피는 5월이면 곧 끝날 것ㅜ이라는 희망이 사라지고, 한 해가 지나면 나아질 것이 라는 간절한 바람도 물거품이 되었습니다. 우리는 여전히 코로나19 와 함께 살아가고 있습니다.   코로나19로 인해 해외여행을 떠나지 못하는 사람들이 자연스럽게 국내 여행을 시작했습니다. 코로나19로 인한 우울증, 무기력증, 불안 등을 문화·관광 활동으로 극복해내기 위해서지요. 한국문화관광연구원이 실시한 코로나19 관련 국민 인식 조사 결과를 보면'
  },
  {
    name: '플렉스가 제일 좋아 TBSC',
    desc: '코로나19와 함께 한 시간이 어느덧 2년이 흘렀습니다. 꽃피는 5월이면 곧 끝날 것ㅜ이라는 희망이 사라지고, 한 해가 지나면 나아질 것이 라는 간절한 바람도 물거품이 되었습니다. 우리는 여전히 코로나19 와 함께 살아가고 있습니다.   코로나19로 인해 해외여행을 떠나지 못하는 사람들이 자연스럽게 국내 여행을 시작했습니다. 코로나19로 인한 우울증, 무기력증, 불안 등을 문화·관광 활동으로 극복해내기 위해서지요. 한국문화관광연구원이 실시한 코로나19 관련 국민 인식 조사 결과를 보면'
  },
  {
    name: '알뜰한게 최고야 TBSM',
    desc: '코로나19와 함께 한 시간이 어느덧 2년이 흘렀습니다. 꽃피는 5월이면 곧 끝날 것ㅜ이라는 희망이 사라지고, 한 해가 지나면 나아질 것이 라는 간절한 바람도 물거품이 되었습니다. 우리는 여전히 코로나19 와 함께 살아가고 있습니다.   코로나19로 인해 해외여행을 떠나지 못하는 사람들이 자연스럽게 국내 여행을 시작했습니다. 코로나19로 인한 우울증, 무기력증, 불안 등을 문화·관광 활동으로 극복해내기 위해서지요. 한국문화관광연구원이 실시한 코로나19 관련 국민 인식 조사 결과를 보면'
  },
  {
    name: '친구와 함께가 좋아 TLFC',
    desc: '코로나19와 함께 한 시간이 어느덧 2년이 흘렀습니다. 꽃피는 5월이면 곧 끝날 것ㅜ이라는 희망이 사라지고, 한 해가 지나면 나아질 것이 라는 간절한 바람도 물거품이 되었습니다. 우리는 여전히 코로나19 와 함께 살아가고 있습니다.   코로나19로 인해 해외여행을 떠나지 못하는 사람들이 자연스럽게 국내 여행을 시작했습니다. 코로나19로 인한 우울증, 무기력증, 불안 등을 문화·관광 활동으로 극복해내기 위해서지요. 한국문화관광연구원이 실시한 코로나19 관련 국민 인식 조사 결과를 보면'
  },
  {
    name: '나 혼자가 좋아 TLFM',
    desc: '코로나19와 함께 한 시간이 어느덧 2년이 흘렀습니다. 꽃피는 5월이면 곧 끝날 것ㅜ이라는 희망이 사라지고, 한 해가 지나면 나아질 것이 라는 간절한 바람도 물거품이 되었습니다. 우리는 여전히 코로나19 와 함께 살아가고 있습니다.   코로나19로 인해 해외여행을 떠나지 못하는 사람들이 자연스럽게 국내 여행을 시작했습니다. 코로나19로 인한 우울증, 무기력증, 불안 등을 문화·관광 활동으로 극복해내기 위해서지요. 한국문화관광연구원이 실시한 코로나19 관련 국민 인식 조사 결과를 보면'
  },
  {
    name: '여행은 역시 밤이지 TLSC',
    desc: '코로나19와 함께 한 시간이 어느덧 2년이 흘렀습니다. 꽃피는 5월이면 곧 끝날 것ㅜ이라는 희망이 사라지고, 한 해가 지나면 나아질 것이 라는 간절한 바람도 물거품이 되었습니다. 우리는 여전히 코로나19 와 함께 살아가고 있습니다.   코로나19로 인해 해외여행을 떠나지 못하는 사람들이 자연스럽게 국내 여행을 시작했습니다. 코로나19로 인한 우울증, 무기력증, 불안 등을 문화·관광 활동으로 극복해내기 위해서지요. 한국문화관광연구원이 실시한 코로나19 관련 국민 인식 조사 결과를 보면'
  },
  {
    name: '여행은 역시 낮이지 TLSM',
    desc: '코로나19와 함께 한 시간이 어느덧 2년이 흘렀습니다. 꽃피는 5월이면 곧 끝날 것ㅜ이라는 희망이 사라지고, 한 해가 지나면 나아질 것이 라는 간절한 바람도 물거품이 되었습니다. 우리는 여전히 코로나19 와 함께 살아가고 있습니다.   코로나19로 인해 해외여행을 떠나지 못하는 사람들이 자연스럽게 국내 여행을 시작했습니다. 코로나19로 인한 우울증, 무기력증, 불안 등을 문화·관광 활동으로 극복해내기 위해서지요. 한국문화관광연구원이 실시한 코로나19 관련 국민 인식 조사 결과를 보면'
  },
]