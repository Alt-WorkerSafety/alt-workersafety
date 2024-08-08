# 작업자 안전 예방 및 긴급 상황 대응 시스템

## 개요
- 건설 현장에서 발생하는 낙상 감지 및 위치 추적을 통한 빠른 대처 및 낙상 위험 구역 지정
- 비계 작업 중 안전고리 미착용으로 인해 발생하는 낙상 사고 예방
- 안전 관리자가 작업자의 안전 정보를 실시간 모니터링할 수 있는 시스템 제작

## 하드웨어 구성
- 작업자의 낙상 감지 및 위치 추적을 위한 안전 조끼
- 작업자의 안전고리 착용을 통한 낙상 예방을 위한 안전 고리
- 관리자가 작업자의 안전 정보를 실시간으로 모니터링할 수 있는 시스템
![image](https://github.com/user-attachments/assets/5e87a97e-af34-466b-8e00-3fa8542de773)

## 모니터링 시스템 구성
![image](https://github.com/user-attachments/assets/c1c980f4-b1a4-433a-bca5-47ef731792cb)


## 기능 구현
### 1. 낙상 감지 기능
MPU6050를 통해 낙상 발생동안 최대의 가속도, 자이로스코프의 각속도 및 충격량을 비교하여 임계값 설정    
<br />
**낙상 여부 판별 방법**       
1. x,y,z축 전체 회전 속도가 임계값을 초과하는지 비교   
2. 저역 통과 필터를 통해 노이즈 제거
3. z축 가속도 평균 계산
4. 충격량 계산

### 2. 작업자 위치 추적 기능
작업장 내 구역을 5m 간격으로 나누어 각 구역에 비콘을 설치하고, 작업자의 안전 조끼와 비콘의 RSSI 값을 통해 해당 구역을 알아내는 방식   
![image](https://github.com/user-attachments/assets/ac6f2069-d0e7-4d5c-95f4-8912f0302296)   
<br />

### 3. 안전 고리 체결 여부 판별 기능

### 4. 통신 

### 5. 모니터링 시스템 


## Team
|<img src="https://avatars.githubusercontent.com/u/89180168?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/111215215?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/118156212?v=4" width="150" height="150"/>|
|:-:|:-:|:-:|
|hyunjin Choi<br/>[@hyunjin-C](https://github.com/hyunjin-C)|[@Noo9Z](https://github.com/Noo9Z)|[@park-hye-ji](https://github.com/park-hye-ji)|

<br />
작성중..


