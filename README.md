## 실시간 차량 관제 서비스 monicar

![Image](https://github.com/user-attachments/assets/1f23c32b-6988-4c50-bc9a-707b1f4f2449)

🚘 [monicar](https://www.monicar.kr)<br>
📒 [Storybook](https://develop--677a9e60af1c67b3c5b149e8.chromatic.com)<br>
💫 [Portfolio](https://www.notion.so/monicar-1a706eec94e680708960f83d128b7523)

<div align="center">

|            | **아이디** | **비밀번호** |
| ---------- | ---------- | ------------ |
| **테스트** | test       | test         |
| **테스트** | happy77    | happy77      |
| **테스트** | angry44    | angry44      |

</div>

<br>

> monicar는 **대규모 카쉐어링 관제를 위한 실시간 모니터링 서비스**입니다. <br> 15,000대 이상의 차량에서 발생하는 시동, GPS, 운행 데이터를 수집하고 분석하여 효율적인 차량 관리 솔루션을 제공합니다.

<br>

## 📊 주요 기능

<br>

![Image](https://github.com/user-attachments/assets/92738813-9be8-4b12-b14d-b1592f0f7f1e)

### 대시보드

- 직관적인 UI/UX로 알림 현황과 공지사항을 한눈에 파악<br>
- SSE(Server-Sent Events)를 활용한 실시간 차량 점검 알림 시스템

<br>

![Image](https://github.com/user-attachments/assets/3570566d-a223-4f3f-8578-0b2ce9b499d8)

### 위치 조회

- 지도 줌 레벨에 따른 차량 클러스터링 시스템<br>
- 개별 차량의 실시간 위치 추적

<br>

![Image](https://github.com/user-attachments/assets/4e9bd3b3-ae35-4f76-869b-a6ffaeab52d3)

### 경로 조회

- 자동 위치 추적을 통한 실시간 차량 모니터링<br>
- 선택 기간의 차량 이동 정보 표시

<br>

![Image](https://github.com/user-attachments/assets/0d8fa13b-7249-49b4-b6ab-eb97a6d5f96f)

### 운행 기록

- 국세청 표준 양식 운행일지 제공<br>
- 엑셀 파일 다운로드 지원<br>
- 일별/시간별 운행 기록 조회<br>
- 차량 등록/삭제 관리 기능<br>

<div align="center">
<br>

![Image](https://github.com/user-attachments/assets/ac37efa4-fb5e-4765-998f-729654fc83bd)

</div>

### 데이터 수집 및 처리

- 차량당 60초 간격으로 60개의 GPS 데이터 일괄 전송<br>
- Apache Kafka를 활용한 대용량 데이터 처리<br>
- 시동, GPS 정보의 실시간 모니터링

## 🛠 기술 스택

### FE

| 기술 스택       | 채택 이유                                                                                                      |
| --------------- | -------------------------------------------------------------------------------------------------------------- |
| Next.js         | SSE(Server-Side Events)를 활용한 검색엔진 최적화, 초기 로딩 속도 개선을 위해 선택                              |
| React           | 리액트에서 제공하는 다양한 훅(useState, useEffect 등)을 활용한 효율적인 상태 관리 및 컴포넌트 개발을 위해 채택 |
| TypeScript      | 정적 타입 검사를 통한 코드 안정성 확보 및 개발 과정에서의 오류 방지를 위해 도입                                |
| vanilla-extract | 제로 런타임 CSS-in-JS 솔루션과 recipe, variants 등 다양한 스타일링 기능을 활용하기 위해 선택                   |
| Storybook       | 공통 컴포넌트의 체계적인 문서화 및 관리를 위해 도입                                                            |
| Zustand         | 효율적인 전역 상태 관리를 위해 채택                                                                            |

### BE

<p align="center">
  Spring Boot, Spring Data JPA, Spring Security, QueryDSL, MyBatis, JWT, SSE, AWS EC2, AWS RDS, AWS ALB
</p>

## 📝 프로젝트 기록

[FE 회의록](https://www.notion.so/FE-cc92ef43b71b46bb894c460c03fcb187?pvs=21) <br>
[코드컨벤션](https://www.notion.so/96a5eee524a447bd866413f631f10650?pvs=21) <br>
[기능정의서](https://www.notion.so/fc9b65d3e40242469b77bc527aa65bdb?pvs=21)

## 👤 팀원소개

<div align="center">

| [<img src="https://avatars.githubusercontent.com/u/93717306?v=4" width="100" height="100"/>](https://github.com/Suxxxxhyun) | [<img src="https://avatars.githubusercontent.com/u/79817983?v=4" width="100" height="100"/>](https://github.com/kbyunghoon) | [<img src="https://avatars.githubusercontent.com/u/70049994?v=4" width="100" height="100"/>](https://github.com/tomatozil) | [<img src="https://avatars.githubusercontent.com/u/93127663?v=4" width="100" height="100"/>](https://github.com/red-dev-Mark) | [<img src="https://avatars.githubusercontent.com/u/170427166?s=400&u=3ff8a944ecc62e8224cd1a7372148d8e70fcc45f&v=4" width="100" height="100"/>](https://github.com/nanafromjeju) |
| :-------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                       [👑 BE @박수현](https://github.com/Suxxxxhyun)                                        |                                         [BE @김병훈](https://github.com/kbyunghoon)                                         |                                         [BE @윤지윤](https://github.com/tomatozil)                                         |                                         [FE @권혁준](https://github.com/red-dev-Mark)                                         |                                                                  [FE @김난아](https://github.com/nanafromjeju)                                                                  |

</div>
