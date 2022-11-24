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
const mbtiqnaList = [
  {
    q: '1. 나의 MBTI는? ',
    a: [
      { answer: 'ISTJ', typ:[0]},
      { answer: 'ISFJ', typ:[1]},
      { answer: 'INFJ' , typ:[2]},
      { answer: 'INTJ' , typ:[3]},
      { answer: 'ISTP' , typ:[4]},
      { answer: 'ISFP' , typ:[5]},
      { answer: 'INFP' , typ:[6]},
      { answer: 'INTP' , typ:[7]},
      { answer: 'ESTP' , typ:[8]},
      { answer: 'ESFP' , typ:[9]},
      { answer: 'ENFP' , typ:[10]},
      { answer: 'ENTP' , typ:[11]},
      { answer: 'ESTJ' , typ:[12]},
      { answer: 'ESFJ' , typ:[13]},
      { answer: 'ENFJ' , typ:[14]},
      { answer: 'ENTJ' , typ:[15]},
    ],
  },
  {
    q: '2. 여행에서 얼마나 돌아다니느냐가 중요하다. ',
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
    q: '3. 여행에서 돈을 얼만큼 쓸 지가 중요하다. ',
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
    q: '4. 나는 기온에 민감하다. ',
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
    q: '5. 여행 지역의 문화가 중요하다. ',
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

const mbtiinfoList = [
  {
    name: '편한게 제일 좋아 ISTJ',
    desc: '메롱'
  },
  {
    name: '돌아다니는게 제일 좋아 ISFJ',
    desc: '메롱'
  },
  {
    name: '플렉스가 제일 좋아 INFJ',
    desc: '메롱'
  },
  {
    name: '알뜰한게 최고야 INTJ',
    desc: '메롱'
  },
  {
    name: '친구와 함께가 좋아 ISTP',
    desc: '메롱'
  },
  {
    name: '나 혼자가 좋아 ISFP',
    desc: '메롱'
  },
  {
    name: '여행은 역시 밤이지 INFP',
    desc: '메롱'
  },
  {
    name: '여행은 역시 낮이지 INTP',
    desc: '메롱'
  },
  {
    name: '편한게 제일 좋아 ESTP',
    desc: '메롱'
  },
  {
    name: '돌아다니는게 제일 좋아 ESFP',
    desc: '메롱'
  },
  {
    name: '플렉스가 제일 좋아 ENFP',
    desc: '메롱'
  },
  {
    name: '알뜰한게 최고야 ENTP',
    desc: '메롱'
  },
  {
    name: '친구와 함께가 좋아 ESTJ',
    desc: '메롱'
  },
  {
    name: '나 혼자가 좋아 ESFJ',
    desc: '메롱'
  },
  {
    name: '여행은 역시 밤이지 ENFJ',
    desc: '메롱'
  },
  {
    name: '여행은 역시 낮이지 ENTJ',
    desc: '메롱'
  },
]
