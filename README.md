# 토이프로젝트 - 조각집
![image](https://github.com/user-attachments/assets/97c27d61-2106-40be-b52c-11ca03431fd2)

## ✈️ 한국항공대 2팀

> **Frontend - 박성진 2021121081**
> 
> 
> **Backend - 김강연 2021129004**
> 

---

## **🔗** Github Repository

> **Frontend** - https://github.com/Jinpop/Codeit-ToyProject-Front
> 
> 
> **Backend** - https://github.com/kangyeon9525/codeit-ToyProject
> 

---

## 📕 프로젝트 개요

> **제목 -** 조각집
> 
> 
> **소개 -** 기억 저장 및 공유 서비스
> 

---

## 📅 개발 기간

> **기간 -** 2024년 9월 16일 ~ 10월 6일
> 

---

## 🛠️ **기술 스택**

> **Environment** - Visual Studio Code, Git, GitHub
> 
> 
> **Frontend** - React, Axios, AWS S3 
> 
> **Backend** - Node.js, MongoDB, AWS S3
> 
> **Deployment** - Render (백엔드 서버 배포)
> 
> **Communication** - Notion, GoogleMeet
> 

---

## 📌 배포 사이트 & 📺 시연 영상

> 배포 사이트 - x
시연 영상 - “https://youtu.be/wdlY51dvMbw”
>

---

## 💡 기능 설명

### 그룹

**그룹 등록**

- 그룹명, 대표 이미지, 그룹 소개, 그룹 공개 여부, 비밀번호를 입력하여 그룹을 등록합니다.

**그룹 수정**

- 비밀번호를 입력하여 그룹 등록 시 입력했던 비밀번호와 일치할 경우 그룹 정보 수정이 가능합니다.

**그룹 삭제**

- 비밀번호를 입력하여 그룹 등록 시 입력했던 비밀번호와 일치할 경우 그룹 삭제가 가능합니다.

**그룹 목록 조회**

- 등록된 그룹 목록을 조회할 수 있습니다.
- 각 그룹의 이미지(한 장), 그룹명, 그룹 소개, 그룹 공개 여부, 디데이(생성 후 지난 일수), 획득 배지수, 추억수, 그룹 공감수가 표시됩니다.
- 공개 그룹 목록과 비공개 그룹 목록을 구분하여 조회합니다.
- 최신순, 게시글 많은순, 공감순, 획득 배지순으로 정렬 가능합니다.
- 그룹명으로 검색 가능합니다.

**그룹 상세 조회**

- 그룹 목록 페이지에서 그룹을 클릭할 경우 그룹 상세 조회가 가능합니다.
- 비공개 그룹의 경우 비밀번호를 입력하여 그룹 등록시 입력한 비밀번호와 일치할 경우 조회 가능합니다.
- 각 그룹의 대표 이미지, 그룹명, 그룹 소개, 그룹 공개 여부, 디데이(생성 후 지난 일수), 획득 배지 목록, 추억수, 그룹 공감수가 표시됩니다.
- 공감 보내기 버튼을 클릭할 경우 그룹의 공감수를 높일 수 있으며, 공감은 클릭할 때마다 중복해서 보낼 수 있습니다.
- 해당 그룹의 추억 목록이 표시됩니다.

### 게시글(추억)

**게시글 등록**

- 닉네임, 제목, 이미지(한 장), 본문, 태그, 장소, 추억의 순간, 추억 공개 여부, 비밀번호를 입력하여 추억 등록이 가능합니다.

**게시글 수정**

- 비밀번호를 입력하여 추억 등록 시 입력했던 비밀번호와 일치할 경우 추억 수정이 가능합니다.

**게시글 삭제**

- 비밀번호를 입력하여 추억 등록 시 입력했던 비밀번호와 일치할 경우 추억 삭제가 가능합니다.

**게시글 목록 조회**

- 그룹 상세 조회를 할 경우 그 그룹에 해당되는 추억 목록이 같이 조회됩니다.
- 각 추억의 닉네임, 추억 공개 여부, 제목, 이미지, 태그, 장소, 추억의 순간, 추억 공감수, 댓글수가 표시됩니다.
- 공개 추억 목록과 비공개 추억 목록을 구분하여 조회합니다.
- 최신순, 댓글순, 공감순으로 정렬 가능합니다.
- 제목, 태그로 검색 가능합니다.

**게시글 상세 조회**

- 추억 목록에서 추억을 클릭할 경우 추억 상세 조회가 가능합니다.
- 닉네임, 제목, 이미지(한 장), 본문, 태그, 장소, 추억의 순간, 추억 공개 여부, 추억 공감수, 댓글수가 표시됩니다.
- 공감 보내기 버튼을 클릭할 경우 그룹의 공감수를 높일 수 있으며, 공감은 클릭할 때마다 중복해서 보낼 수 있습니다.
- 해당 추억의 댓글 목록이 조회됩니다.

### 댓글

**댓글 등록**

- 닉네임, 댓글 내용, 비밀번호를 입력하여 댓글 등록이 가능합니다.

**댓글 수정**

- 비밀번호를 입력하여 댓글 등록 시 입력했던 비밀번호와 일치할 경우 댓글 수정이 가능합니다.

**댓글 삭제**

- 비밀번호를 입력하여 댓글 등록 시 입력했던 비밀번호와 일치할 경우 댓글 삭제가 가능합니다.

**댓글 목록 조회**

- 추억을 조회할 경우 그 추억에 해당되는 댓글 목록이 조회됩니다.
- 닉네임, 댓글 생성 날짜, 댓글 내용이 표시됩니다.

## 결과 !!

![스크린샷 2025-02-18 오후 5 56 25](https://github.com/user-attachments/assets/bce6a320-4034-4275-861b-eb9d18940d53)
