export const curriculumData = [
  {
    id: "module-1",
    title: "1. 서버 및 AWS EC2 기초",
    sections: [
      {
        id: "1-1",
        title: "IP, DNS, TCP/Port 개념 이해",
        description: "웹 서비스 배포를 위한 기초 네트워크 네트워크 주소와 포트 개념을 정복합니다.",
        content: `
          <h3>서버(Server)와 클라이언트(Client)</h3>
          <p>웹 서비스의 동작은 아주 단순하게 <strong>요청(Request)</strong>과 <strong>응답(Response)</strong>으로 이루어집니다. 웹 브라우저(크롬, 사파리 등)는 클라이언트가 되고, 우리의 웹 페이지나 백엔드 로직이 올라가서 24시간 작동하며 요청에 반응하는 컴퓨터가 <strong>서버(Server)</strong>입니다.</p>
          
          <div class="info-box">
            <div class="info-box-title">💡 노베이스 핵심 개념: IP 주소와 도메인(DNS)</div>
            <div class="info-box-content">
              <ul>
                <li><strong>IP 주소 (Internet Protocol Address)</strong>: 인터넷상에서 컴퓨터가 서로를 식별할 수 있는 고유한 집 주소입니다. (예: <code>13.125.22.45</code>)</li>
                <li><strong>DNS (Domain Name System)</strong>: 숫자로 된 어려운 IP 주소를 인간이 이해하기 쉬운 문자 주소(예: <code>naver.com</code>, <code>google.com</code>)로 번역해 주는 전화번호부 서비스입니다.</li>
              </ul>
            </div>
          </div>

          <h3>포트(Port)란 무엇인가요?</h3>
          <p>한 대의 서버 컴퓨터 안에서는 웹 서버, 데이터베이스, 채팅 프로그램 등 다양한 프로그램들이 동시에 실행됩니다. 이때 외부에서 들어오는 데이터가 어떤 프로그램으로 가야 하는지 알려주는 <strong>수신함 번호</strong>가 바로 <strong>포트(Port)</strong>입니다. 포트 번호는 0번부터 65535번까지 존재합니다.</p>
          
          <h4>주요 포트 번호 규칙 (Well-Known Ports)</h4>
          <ul>
            <li><strong>22번 (SSH)</strong>: 서버에 안전하게 접속하여 명령어를 실행할 때 사용하는 포트.</li>
            <li><strong>80번 (HTTP)</strong>: 암호화되지 않은 일반 웹 통신 포트. (브라우저 주소창에 <code>http://</code>로 접속)</li>
            <li><strong>443번 (HTTPS)</strong>: SSL/TLS로 보안 암호화가 적용된 웹 통신 포트. (브라우저 주소창에 <code>https://</code>로 접속)</li>
            <li><strong>8080번</strong>: Tomcat 및 Spring Boot 백엔드 애플리케이션의 기본 포트.</li>
          </ul>

          <div class="warning-box">
            <div class="warning-box-title">⚠️ 보안 그룹(Security Group)과 방화벽</div>
            <div class="warning-box-content">
              AWS EC2에 서버를 띄워도 포트가 기본적으로 닫혀 있다면 외부 클라이언트가 접속할 수 없습니다. AWS에서는 <strong>보안 그룹(Security Group)</strong> 설정을 통해 특정 포트(예: 80, 443)의 접근을 명시적으로 허용해야 합니다. 이를 <strong>인바운드 규칙(Inbound Rules)</strong>이라고 부릅니다.
            </div>
          </div>
        `,
        practice: {
          prompt: "웹 서버에 원격 접속하기 위한 보안 통신 포트인 SSH(22번)를 활용하여 AWS Ubuntu 서버(IP: 13.125.22.45)에 접속하는 ssh 명령어를 작성해 보세요. (개인키 파일 이름은 key.pem 이라고 가정합니다.)",
          expectedCommand: "ssh -i key.pem ubuntu@13.125.22.45",
          commandHint: "ssh -i [키페어_파일명] ubuntu@[서버_IP] 형식으로 작성하세요.",
          successMessage: "정답입니다! ssh 접속 명령어 구조를 완벽히 이해하셨습니다."
        },
        quiz: {
          question: "Spring Boot 백엔드 애플리케이션을 AWS EC2 서버에 실행하고, 사용자가 일반 웹 주소(http://)를 통해 접속할 수 있도록 Nginx 프론트 서버를 연결하려고 합니다. 이때 AWS 보안 그룹 인바운드 규칙에서 필수로 열어주어야 할 포트 2개는 무엇일까요?",
          options: [
            "22번(SSH)과 3306번(MySQL)",
            "80번(HTTP)과 22번(SSH)",
            "8080번(Spring)과 3306번(MySQL)",
            "443번(HTTPS)과 8080번(Spring)"
          ],
          correctIndex: 1,
          explanation: "일반 사용자가 웹 사이트에 직접 접속하려면 80번(HTTP) 포트가 반드시 열려 있어야 하며, 개발자가 서버 컴퓨터에 원격으로 접속해 세팅을 관리하기 위해 22번(SSH) 포트 역시 필수적으로 인바운드 허용되어야 합니다. 내부 WAS 포트인 8080번은 Nginx가 내부적으로 포워딩해주기 때문에 외부에 직접 열어둘 필요가 없습니다."
        }
      },
      {
        id: "1-2",
        title: "AWS EC2 인스턴스 생성 및 보안 그룹 설정",
        description: "클라우드 가상 서버인 AWS EC2를 생성하고, 네트워크 방화벽(보안 그룹)을 설정하는 실무 단계를 학습합니다.",
        content: `
          <h3>AWS EC2 (Elastic Compute Cloud)란?</h3>
          <p>AWS EC2는 아마존 웹 서비스가 제공하는 <strong>클라우드 가상 컴퓨터</strong>입니다. 우리는 집 컴퓨터를 24시간 켜놓는 대신, AWS에서 가상의 컴퓨터 한 대를 빌려 그 위에 웹 서버를 구축하게 됩니다.</p>
          
          <h3>EC2 생성 단계 요약 (Ubuntu OS 기준)</h3>
          <ol>
            <li><strong>AWS 콘솔 로그인</strong> 후 EC2 서비스 페이지로 이동합니다.</li>
            <li><strong>인스턴스 시작 (Launch Instance)</strong> 버튼을 클릭합니다.</li>
            <li><strong>OS 선택 (AMI)</strong>: 초보자가 쓰기 가장 무난하고 자료가 많은 <strong>Ubuntu Server 22.04 LTS</strong>를 선택합니다.</li>
            <li><strong>인스턴스 유형</strong>: 프리티어(무료) 등급인 <code>t2.micro</code> (또는 지역에 따라 <code>t3.micro</code>)를 선택합니다.</li>
            <li><strong>키페어(Key Pair) 생성</strong>: 외부에서 서버 컴퓨터에 안전하게 로그인할 수 있는 일종의 비밀번호 파일(<code>.pem</code>)을 생성 및 다운로드합니다. 이 파일은 유실하면 서버에 다시 들어갈 수 없으므로 안전한 곳에 보관해야 합니다!</li>
          </ol>

          <div class="warning-box">
            <div class="warning-box-title">🔒 보안 그룹 설정의 핵심 규칙 (Inbound Rules)</div>
            <div class="warning-box-content">
              인스턴스 시작 화면 하단의 <strong>네트워크 설정</strong>에서 보안 그룹을 생성합니다. 아래 3가지 규칙을 설정합니다.
              <table style="width:100%; border-collapse:collapse; margin-top: 10px;">
                <tr style="border-bottom:1px solid var(--border-color); font-weight:bold; text-align:left;">
                  <th style="padding:8px;">유형</th>
                  <th style="padding:8px;">포트 범위</th>
                  <th style="padding:8px;">소스</th>
                  <th style="padding:8px;">목적</th>
                </tr>
                <tr style="border-bottom:1px solid var(--border-color);">
                  <td style="padding:8px;">SSH</td>
                  <td style="padding:8px;">22</td>
                  <td style="padding:8px;">내 IP (보안 추천)</td>
                  <td style="padding:8px;">관리자의 터미널 원격 접속</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border-color);">
                  <td style="padding:8px;">HTTP</td>
                  <td style="padding:8px;">80</td>
                  <td style="padding:8px;">0.0.0.0/0 (모든 IP)</td>
                  <td style="padding:8px;">웹 클라이언트의 일반 웹 서버 접속</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border-color);">
                  <td style="padding:8px;">HTTPS</td>
                  <td style="padding:8px;">443</td>
                  <td style="padding:8px;">0.0.0.0/0 (모든 IP)</td>
                  <td style="padding:8px;">암호화 웹 서버 접속</td>
                </tr>
              </table>
            </div>
          </div>
        `,
        practice: {
          prompt: "Ubuntu 인스턴스를 시작한 후 SSH 접속을 시도하기 전, 로컬 PC에 저장한 키페어 파일(my-key.pem)의 읽기 권한을 소유자 전용으로 수정하는 리눅스 명령어를 입력하세요. (파일 권한이 너무 열려있으면 SSH 접속이 거부됩니다.)",
          expectedCommand: "chmod 400 my-key.pem",
          commandHint: "chmod 명령어로 소유자에게만 읽기 권한(4)을 주는 값은 400입니다.",
          successMessage: "정답입니다! chmod 400 명령은 .pem 개인 키를 안전하게 격리하여 SSH 접속 규격을 맞추는 데 필수적입니다."
        },
        quiz: {
          question: "EC2 키페어(.pem) 파일에 대한 설명 중 잘못된 것은 무엇일까요?",
          options: [
            "서버 접속 권한을 증명하는 개인 암호키 파일이다.",
            "유실된 경우 AWS 콘솔에서 언제든지 원본 파일을 다시 다운로드할 수 있다.",
            "타인에게 노출되면 서버 전체 권한이 탈취될 수 있으므로 절대 공유하면 안 된다.",
            "SSH 클라이언트로 원격 접속할 때 파일 경로를 지정해야 한다."
          ],
          correctIndex: 1,
          explanation: "AWS 키페어 파일은 한 번 생성할 때 다운로드하지 않으면 원본 파일을 AWS 측에서 절대 복구하거나 다시 제공해 주지 않습니다. 반드시 백업을 해두어야 합니다."
        }
      },
      {
        id: "1-3",
        title: "SSH 접속 및 리눅스 기본 명령어 마스터",
        description: "원격 서버의 내부 운영체제(Linux OS)에 진입하여 시스템을 제어하는 기본기를 쌓습니다.",
        content: `
          <h3>터미널 접속하기 (SSH)</h3>
          <p>로컬 PC(Windows/Mac)에서 원격 리눅스 가상 컴퓨터를 원격 제어하려면 <strong>SSH (Secure Shell)</strong>를 이용해 터미널 터미널 연결을 맺어야 합니다.</p>
          
          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">SSH 접속 명령어</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('ssh -i /path/to/my-key.pem ubuntu@13.125.22.45')">Copy</button>
            </div>
            <div class="code-body">
              <pre>ssh -i [pem 파일 경로] ubuntu@[EC2의 퍼블릭 IP]</pre>
            </div>
          </div>

          <h3>노베이스 전용: 리눅스 필수 기본 명령어 Cheat Sheet</h3>
          <p>윈도우처럼 더블클릭이나 마우스 조작이 불가능한 리눅스 환경에서는 터미널 명령어로 모든 폴더 이동과 설치 작업을 진행합니다.</p>
          
          <ul>
            <li><code>ls -al</code>: 현재 폴더에 있는 모든 파일과 디렉토리 목록을 보여줍니다. (숨김 파일 포함)</li>
            <li><code>cd [폴더이름]</code>: 특정 폴더로 이동합니다. (<code>cd ..</code>은 상위 폴더로 이동)</li>
            <li><code>pwd</code>: 현재 내가 어떤 폴더 경로에 서 있는지 보여줍니다.</li>
            <li><code>mkdir [폴더이름]</code>: 새로운 폴더를 생성합니다.</li>
            <li><code>sudo [명령어]</code>: <strong>Super User Do</strong>의 약자로, 관리자(Root) 권한으로 명령어를 강제 실행합니다. 프로그램 설치나 설정 파일 수정 시 필수입니다.</li>
            <li><code>sudo apt update</code>: 리눅스 패키지 매니저의 설치 가능 리스트를 최신 상태로 업데이트합니다.</li>
            <li><code>sudo apt install [프로그램명]</code>: 프로그램을 설치합니다. (예: <code>sudo apt install nginx</code>)</li>
          </ul>
        `,
        practice: {
          prompt: "현재 원격 Ubuntu 서버의 패키지 설치 리스트를 최신으로 동기화(업데이트)하는 관리자 권한 명령어를 작성해 보세요.",
          expectedCommand: "sudo apt update",
          commandHint: "관리자 권한인 sudo와 패키지 매니저 업데이트 명령어인 apt update를 조합하세요.",
          successMessage: "정답입니다! 프로그램 설치나 시스템 최신화 작업 전에 항상 sudo apt update를 먼저 실행해야 최신 버전 다운로드가 가능합니다."
        },
        quiz: {
          question: "리눅스 터미널에서 권한 거부(Permission Denied) 에러가 발생했을 때 해결하기 위한 가장 보편적인 대안은 무엇인가요?",
          options: [
            "명령어 끝에 &를 붙여 실행한다.",
            "명령어 맨 앞에 sudo를 추가하여 실행한다.",
            "서버를 재부팅한다.",
            "사용자 이름을 root로 바꾸어 재로그인한다."
          ],
          correctIndex: 1,
          explanation: "리눅스는 보안을 위해 기본 일반 사용자의 권한을 제한합니다. 시스템 설정 수정이나 전역 프로그램 설치 같은 핵심 작업 시에는 'sudo'를 명령어 앞에 붙여 관리자 권한을 획득해야 해결됩니다."
        }
      }
    ]
  },
  {
    id: "module-2",
    title: "2. Spring Boot API 서버 구축 및 패키징",
    sections: [
      {
        id: "2-1",
        title: "Web Server와 WAS(Web Application Server)의 차이",
        description: "웹 아키텍처의 핵심 축인 정적 웹 서버(WS)와 동적 웹 애플리케이션 서버(WAS)의 경계를 이해합니다.",
        content: `
          <h3>서버 아키텍처의 근본적인 질문</h3>
          <p>웹 브라우저가 접속했을 때, 왜 Nginx와 Tomcat(Spring Boot에 내장)을 같이 쓰고 따로 구분할까요? 역할 분담을 통한 성능 극대화를 위해서입니다.</p>

          <div class="deep-dive">
            <div class="deep-dive-header">
              <span>🖥️ Web Server (웹 서버) vs WAS (웹 애플리케이션 서버) 상세 비교</span>
            </div>
            <div class="deep-dive-content">
              <table style="width:100%; border-collapse:collapse; font-size: 0.85rem;">
                <tr style="border-bottom: 2px solid var(--border-color); font-weight:bold;">
                  <th style="padding:8px;">구분</th>
                  <th style="padding:8px;">Web Server (WS)</th>
                  <th style="padding:8px;">Web Application Server (WAS)</th>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding:8px; font-weight:bold;">대표 주자</td>
                  <td style="padding:8px;">Nginx, Apache Web Server</td>
                  <td style="padding:8px;">Tomcat, Jetty, UnderTow</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding:8px; font-weight:bold;">핵심 역할</td>
                  <td style="padding:8px;"><strong>정적 리소스</strong> 전달 (HTML, CSS, 이미지, JS 파일)</td>
                  <td style="padding:8px;"><strong>동적 비즈니스 로직</strong> 실행 (DB 조회, 로그인 처리, API 결과 반환)</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding:8px; font-weight:bold;">특징</td>
                  <td style="padding:8px;">가볍고 빠름, 동시 접속 다중 처리에 매우 유리</td>
                  <td style="padding:8px;">무겁고 다양한 연산이 가능함, 자바 바이트코드 해석</td>
                </tr>
              </table>
            </div>
          </div>

          <h3>Nginx와 Spring Boot(Tomcat)의 협업 구조</h3>
          <p>사용자가 인터넷망을 타고 서버에 오면, 가장 앞단(프론트)에서 <strong>Nginx</strong>가 대문을 열고 기다립니다. Nginx는 사용자의 요청 경로를 살피고:</p>
          <ol>
            <li>사용자가 정적인 이미지나 HTML을 원하면: Tomcat까지 갈 것도 없이 Nginx 자체적으로 리소스를 초고속 반환합니다.</li>
            <li>사용자가 데이터 생성, 로그인, DB 조회(비즈니스 로직)를 원하면: 내부망 뒤쪽에 숨어있는 <strong>Spring Boot(8080 포트)</strong>에 요청을 조용히 전달합니다. 이를 <strong>리버스 프록시(Reverse Proxy)</strong>라고 합니다.</li>
          </ol>
        `,
        practice: {
          prompt: "로컬 컴퓨터에서 실행 중인 Spring Boot WAS 서버에 접근하여 API를 호출해 보기 위해 브라우저 주소창에 치는 기본 URL 주소(호스트: localhost, 포트: 8080)를 완전한 형태로 써보세요.",
          expectedCommand: "http://localhost:8080",
          commandHint: "프로토콜(http)과 호스트(localhost), 포트번호(8080)를 구분 기호(: 및 //)와 함께 정확히 작성해 주세요.",
          successMessage: "정답입니다! http://localhost:8080 주소는 개발 환경 백엔드 애플리케이션의 관문 주소입니다."
        },
        quiz: {
          question: "Nginx(Web Server) 뒤에 Tomcat(WAS)을 배치하는 아키텍처 구조의 장점으로 가장 적절하지 않은 것은 무엇입니까?",
          options: [
            "Tomcat 서버가 외부 인터넷망에 직접 노출되지 않아 보안성이 크게 올라간다.",
            "단순 이미지, CSS 같은 정적 파일 처리를 Nginx가 담당하므로 WAS의 부하를 줄일 수 있다.",
            "Nginx가 사용자 요청을 받아 여러 대의 WAS 서버로 나누어 보내주는 로드 밸런싱이 가능하다.",
            "WAS 서버가 다운되면 Nginx가 자동으로 코드를 수정하여 시스템을 자동 복구해 준다."
          ],
          correctIndex: 3,
          explanation: "Nginx는 서버 인프라를 라우팅하고 트래픽을 처리하는 프로그램일 뿐, 개발자의 자바 소스 코드를 인공지능처럼 알아서 수정 및 자동 복구해 주는 역할은 불가능합니다."
        }
      },
      {
        id: "2-2",
        title: "Spring Boot CRUD API 서버 코드 작성 및 검증",
        description: "실습에 사용할 수 있는 간단한 REST API 서버 코드를 생성하고 동작 상태를 알아봅니다.",
        content: `
          <h3>실습을 위한 단순 CRUD REST API 설계</h3>
          <p>서버가 잘 배포되었는지 검증하려면 외부에서 데이터를 보냈을 때 데이터베이스나 메모리에 적재되고, 이를 조회할 수 있는 기능이 필요합니다. 아래는 메모리에 상품 리스트를 저장하고 반환하는 Spring Boot의 RestController 예시 코드입니다.</p>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">ProductController.java</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('@RestController\n@RequestMapping(\&quot;/api/products\&quot;)\npublic class ProductController {\n    private final List<String> products = new ArrayList<>(List.of(\&quot;MacBook\&quot;, \&quot;iPhone\&quot;));\n\n    @GetMapping\n    public List<String> getAll() {\n        return products;\n    }\n\n    @PostMapping\n    public String add(@RequestParam String name) {\n        products.add(name);\n        return \&quot;Success\&quot;;\n    }\n}')">Copy</button>
            </div>
            <div class="code-body">
              <pre><code>package com.example.demo;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    // 실습 편의상 인메모리 리스트 사용
    private final List&lt;String&gt; products = new ArrayList<>(List.of("MacBook", "iPhone"));

    // GET /api/products : 상품 목록 조회
    @GetMapping
    public List&lt;String&gt; getAll() {
        return products;
    }

    // POST /api/products?name=xxx : 상품 추가
    @PostMapping
    public String add(@RequestParam String name) {
        products.add(name);
        return "Added Product: " + name;
    }
}</code></pre>
            </div>
          </div>

          <div class="info-box">
            <div class="info-box-title">💡 초보자용 가이드: API 응답 확인(cURL)</div>
            <div class="info-box-content">
              서버가 켜지면 브라우저에 <code>http://localhost:8080/api/products</code>를 입력하여 JSON 결과가 화면에 잘 나타나는지 확인할 수 있습니다.
            </div>
          </div>
        `,
        practice: {
          prompt: "현재 서버 인스턴스에 스프링 부트 서버가 켜져 있는지 확인하기 위해, 백그라운드에서 실행 중인 전체 자바(Java) 프로세스 목록을 검색하는 리눅스 명령어를 작성해 보세요.",
          expectedCommand: "ps -ef | grep java",
          commandHint: "ps -ef로 실행중인 모든 프로세스를 확인하고, 파이프(|)와 grep 명령어로 java 키워드를 걸러냅니다.",
          successMessage: "정답입니다! ps -ef | grep java 명령은 스프링 서버 데몬이 원활히 동작하는지 검사하는 현업 필수 진단법입니다."
        },
        quiz: {
          question: "스프링 컨트롤러의 HTTP 메서드 설명 중 올바른 조합은 무엇인가요?",
          options: [
            "GET: 데이터 삭제, POST: 데이터 조회",
            "GET: 데이터 생성, POST: 데이터 갱신",
            "GET: 데이터 조회, POST: 데이터 생성",
            "PUT: 데이터 조회, DELETE: 데이터 갱신"
          ],
          correctIndex: 2,
          explanation: "REST API 기본 원칙에 따라 GET은 리소스를 안전하게 '조회(Read)'할 때 사용하고, POST는 새로운 리소스를 '생성(Create)'할 때 사용합니다."
        }
      },
      {
        id: "2-3",
        title: "Gradle을 이용한 빌드(Build) 및 Jar 파일 추출",
        description: "작성한 자바 코드를 실제 배포 가능한 하나의 압축 단일 실행 파일(.jar)로 생성해 봅니다.",
        content: `
          <h3>Gradle 프로젝트 빌드 프로세스</h3>
          <p>로컬 PC에서 작성한 Spring Boot 소스코드는 리눅스 서버로 바로 넘겨서 컴파일하지 않고, 컴파일이 완료된 상태인 <strong>JAR(Java Archive)</strong> 파일로 빌드한 뒤 이 단 하나의 파일만 서버로 전송하여 실행하는 것이 표준 배포 프로세스입니다.</p>

          <h4>프로젝트 빌드 단계 명령어</h4>
          <p>Gradle 프로젝트의 루트 폴더로 이동한 뒤 <strong>Gradle Wrapper(gradlew)</strong> 파일을 활용해 빌드를 수행합니다.</p>
          
          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">Gradle 빌드 명령어</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('./gradlew clean build')">Copy</button>
            </div>
            <div class="code-body">
              <pre># Windows (cmd/PowerShell)
gradlew.bat clean build

# Mac / Linux / Git Bash
./gradlew clean build</pre>
            </div>
          </div>

          <ul>
            <li><code>clean</code>: 이전 빌드 작업으로 생성되었던 불필요한 파일이나 디렉토리(build/)를 싹 정리해 줍니다.</li>
            <li><code>build</code>: 자바 소스코드를 빌드하고 테스트 코드를 실행한 뒤, 최종 산출물인 JAR 파일을 생성합니다.</li>
          </ul>

          <div class="info-box">
            <div class="info-box-title">📍 빌드 산출물 위치</div>
            <div class="info-box-content">
              성공적으로 빌드가 완료되면 프로젝트 내 <code>build/libs/</code> 폴더 내부에 <code>[프로젝트명]-[버전]-SNAPSHOT.jar</code> 또는 <code>[프로젝트명].jar</code> 형태의 파일이 생성됩니다.
              이 파일을 아래 명령어로 로컬이나 서버 터미널에서 즉시 독립 가동할 수 있습니다.
              <br/><code>java -jar build/libs/demo-0.0.1-SNAPSHOT.jar</code>
            </div>
          </div>
        `,
        practice: {
          prompt: "테스트 코드를 실행하지 않고 컴파일 및 패키징만 빠르게 진행하여 빌드 시간을 단축시키고 싶을 때, gradlew clean build 뒤에 붙이는 옵션 플래그는 무엇일까요?",
          expectedCommand: "./gradlew clean build -x test",
          commandHint: "테스트를 제외하겠다는 뜻인 -x test를 뒤에 기재해 주세요.",
          successMessage: "정답입니다! 실무에서 규모가 큰 프로젝트의 경우 빌드 속도를 높이거나 임시 배포 검증용으로 테스트 제외 플래그(-x test)를 적극 활용합니다."
        },
        quiz: {
          question: "스프링 부트 빌드 결과물인 .jar 확장자 파일의 내부에 대한 설명 중 틀린 것은 무엇입니까?",
          options: [
            "컴파일된 자바 바이트코드(.class) 파일들이 모여있다.",
            "Spring Boot 프로젝트가 구동되기 위한 내장 WAS(Tomcat 등) 라이브러리가 포함되어 있다.",
            "리눅스 서버에 별도의 JDK(Java Development Kit)가 설치되지 않아도 이 파일 자체로 그냥 실행할 수 있다.",
            "application.properties 또는 application.yml 설정 정보 파일도 내부에 포장되어 포함된다."
          ],
          correctIndex: 2,
          explanation: ".jar 파일은 자바 가상머신(JVM) 기반에서 실행되는 프로그램이므로, 서버 운영체제에는 반드시 실행 도구인 자바 실행 환경(JDK 혹은 JRE)이 미리 설치되어 있어야 작동합니다."
        }
      }
    ]
  },
  {
    id: "module-3",
    title: "3. Docker를 활용한 서버 컨테이너화",
    sections: [
      {
        id: "3-1",
        title: "Docker의 기본 개념 (VM과 Container의 차이)",
        description: "운영 환경 일치를 위한 도커 컨테이너 기술의 원리와 장점을 배웁니다.",
        content: `
          <h3>도커(Docker)가 왜 등장했나요?</h3>
          <p>개발자의 PC(예: Windows 11)에서는 정상 작동하던 스프링 부트 서버가 배포 서버(Ubuntu Linux)로 이동하니 에러가 뿜어져 나오거나 환경 설정 파일 경로 차이로 뻗는 현상이 아주 잦았습니다. 이를 <strong>"그거 제 컴퓨터에서는 잘 됐는데요?"</strong> 문제라고 합니다.</p>
          <p>도커는 소스 코드와 프로그램 실행에 필요한 <strong>OS 환경, 라이브러리, 설정값 정보</strong>를 모두 하나의 박스에 담아 포장합니다. 이 포장 박스를 <strong>도커 컨테이너(Docker Container)</strong>라고 합니다.</p>

          <div class="info-box">
            <div class="info-box-title">⚙️ 가상 머신(VM) vs Docker 컨테이너</div>
            <div class="info-box-content">
              <ul>
                <li><strong>가상 머신 (Virtual Machine)</strong>: VMware나 VirtualBox처럼 하나의 호스트 컴퓨터 위에 무거운 독립 OS(커널 전체)를 매번 새로 띄웁니다. 기동하는 데 몇 분씩 걸리며 CPU, 메모리 낭비가 큽니다.</li>
                <li><strong>도커 컨테이너 (Docker Container)</strong>: 호스트 컴퓨터의 OS 커널(머리통)을 공유하고, 격리된 가상의 실행 환경(몸통)만 가볍게 띄웁니다. 기동 시간이 단 몇 초 미만이며 용량과 리소스 소모가 거의 없어 압도적으로 효율적입니다.</li>
              </ul>
            </div>
          </div>
        `,
        practice: {
          prompt: "현재 설치된 Docker 서비스의 데몬 버전을 검사하고 설치가 올바르게 작동 중인지 확인할 수 있는 가장 단순한 터미널 명령어를 입력하세요.",
          expectedCommand: "docker --version",
          commandHint: "도커의 버전을 묻는 기본 명령어 구조입니다.",
          successMessage: "정답입니다! docker --version 이나 docker version 명령어를 통해 CLI 응답을 얻을 수 있습니다."
        },
        quiz: {
          question: "도커(Docker) 컨테이너 기술의 핵심 가치 중 가장 거리가 먼 것은 무엇인가요?",
          options: [
            "개발 환경과 운영(서버) 환경의 물리적 불일치를 완전히 해결할 수 있다.",
            "한 대의 서버 컴퓨터 내부에서 각각 다른 자바 버전(예: JDK 11, JDK 17)의 앱들을 격리시켜 동시 실행할 수 있다.",
            "컴퓨터 부품 성능을 향상시켜 CPU 하드웨어의 클럭 속도를 높여준다.",
            "컨테이너 이미지만 있으면 언제 어디서든 명령어 단 한 줄로 서버 인프라를 복제 및 기동할 수 있다."
          ],
          correctIndex: 2,
          explanation: "도커는 격리 및 배포 표준화를 돕는 소프트웨어 가상화 레이어일 뿐이며, 컴퓨터 하드웨어 부품(CPU 성능 자체)을 물리적으로 튜닝하거나 오버클럭해 주는 도구는 아닙니다."
        }
      },
      {
        id: "3-2",
        title: "Dockerfile 작성법 및 Spring Boot 애플리케이션 명세",
        description: "우리 코드를 도커 이미지로 굽기 위한 기획 명세서인 Dockerfile 문법을 학습합니다.",
        content: `
          <h3>Dockerfile이란?</h3>
          <p>도커 이미지를 생성하기 위해 컴퓨터에게 내려주는 <strong>빌드 설계 가이드 라인</strong> 문서입니다. 프로젝트 루트 디렉토리에 확장자 없이 <code>Dockerfile</code>이라는 이름의 텍스트 파일을 만들고 작성합니다.</p>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">Dockerfile (Spring Boot JDK 17 표준 템플릿)</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('FROM openjdk:17-jdk-slim\nARG JAR_FILE=build/libs/*.jar\nCOPY \${JAR_FILE} app.jar\nENTRYPOINT [\&quot;java\&quot;, \&quot;-jar\&quot;, \&quot;/app.jar\&quot;]\nEXPOSE 8080')">Copy</button>
            </div>
            <div class="code-body">
              <pre><code># 1. 컨테이너 베이스가 될 OS + Java 런타임 이미지 지정
FROM openjdk:17-jdk-slim

# 2. 호스트 컴퓨터의 빌드된 JAR 경로를 변수화
ARG JAR_FILE=build/libs/*.jar

# 3. JAR 파일을 도커 컨테이너 내부로 복사하고 이름을 app.jar로 개명
COPY \${JAR_FILE} app.jar

# 4. 컨테이너가 켜질 때 실행될 기본 터미널 명령어 세팅
ENTRYPOINT ["java", "-jar", "/app.jar"]

# 5. 컨테이너가 리스닝할 내부 포트 문서화 지정
EXPOSE 8080</code></pre>
            </div>
          </div>

          <h4>Dockerfile 지시어 세부 이해</h4>
          <ul>
            <li><code>FROM</code>: 도커 빌드의 시작점으로, 베이스 이미지를 선언합니다. 이미 구축된 자바 구동용 경량화 OS(slim)를 베이스로 잡습니다.</li>
            <li><code>COPY</code>: 내 PC의 파일이나 폴더를 도커 컨테이너 이미지 내부 파일 시스템으로 복사합니다.</li>
            <li><code>ENTRYPOINT</code>: 컨테이너 가동 시 무조건 작동할 강제 실행 커맨드 목록입니다. 배열 형태로 적습니다.</li>
          </ul>
        `,
        practice: {
          prompt: "현재 작성한 Dockerfile을 기반으로, 'my-api-server'라는 이름과 '1.0'이라는 태그(버전) 정보를 지정하여 도커 이미지를 빌드하는 명령어를 적어보세요. (현재 위치의 Dockerfile을 읽어야 합니다.)",
          expectedCommand: "docker build -t my-api-server:1.0 .",
          commandHint: "build 명령어 뒤에 -t 옵션으로 이름을 주고, 맨 끝에 현재 경로를 지칭하는 마침표(.)를 반드시 한 칸 띄우고 찍어주어야 합니다.",
          successMessage: "정답입니다! docker build 시 마지막의 점(.)은 현재 디렉토리를 작업 컨텍스트(Context)로 지정하는 중대한 규칙입니다."
        },
        quiz: {
          question: "Dockerfile에서 사용되는 ENTRYPOINT 지시어의 역할은 무엇인가요?",
          options: [
            "도커 파일의 소유자 이메일 주소를 입력하는 곳이다.",
            "컨테이너가 시작될 때 자동으로 실행할 기본 리눅스 쉘 명령어를 리스트 형태로 선언한다.",
            "컨테이너 이미지 내부에서 사용할 환경 변수(DB 패스워드 등)를 대입하는 부분이다.",
            "빌드 시 무시할 폴더 목록을 기술하는 곳이다."
          ],
          correctIndex: 1,
          explanation: "ENTRYPOINT는 도커 컨테이너가 생성 및 시작되는 즉시 백그라운드나 포그라운드에서 실행할 최종 주행 명령어(예: java -jar app.jar)를 기재하는 약속된 공간입니다."
        }
      },
      {
        id: "3-3",
        title: "도커 필수 명령어 및 포트 포워딩 실무",
        description: "이미지 빌드, 컨테이너 가동, 로그 검사 및 가장 중요한 외부 포트 바인딩 원리를 파헤칩니다.",
        content: `
          <h3>도커 핵심 명령어 Cheat Sheet</h3>
          <p>이미지가 빌드되었다면, 이제 이를 활용해 실제 실행 단위인 컨테이너를 가동하고 진단할 수 있어야 합니다.</p>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">도커 명령어 모음</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('docker run -d -p 80:8080 --name my-app my-api-server:1.0')">Copy</button>
            </div>
            <div class="code-body">
              <pre># 1. 컨테이너 가동 (백그라운드 실행 -d, 포트연결 -p)
docker run -d -p [외부포트]:[내부포트] --name [컨테이너이름] [이미지이름]

# 2. 실행 중인 컨테이너 목록 조회
docker ps

# 3. 모든 컨테이너 목록 조회 (꺼져있는 컨테이너 포함)
docker ps -a

# 4. 가동 중인 컨테이너의 실시간 로그(콘솔 출력) 확인
docker logs -f [컨테이너ID 또는 이름]

# 5. 가동 중인 컨테이너 강제 중지 및 삭제
docker stop [컨테이너이름]
docker rm [컨테이너이름]</pre>
            </div>
          </div>

          <h3>포트 포워딩(Port Forwarding)이 왜 중요할까요?</h3>
          <p>도커 컨테이너는 호스트 컴퓨터 내부에서 독립적으로 격리된 가상 환경이므로, 자신만의 사설 IP 주소와 포트 체계를 가집니다. 외부 사용자가 호스트 서버의 IP로 들어왔을 때, 도커 내부의 포트로 연결을 통과시켜 주는 문잡이가 필요합니다. 이것이 <strong><code>-p [호스트포트]:[컨테이너포트]</code></strong> 옵션입니다.</p>

          <div class="info-box">
            <div class="info-box-title">🔄 예시: -p 80:8080 옵션의 흐름</div>
            <div class="info-box-content">
              사용자가 브라우저에 <code>http://서버IP:80</code> (기본 80포트 접속)으로 접근하면 -> 호스트 컴퓨터가 이를 받아서 -> 도커 컨테이너 내부의 <code>8080</code>포트(Spring Boot)로 매핑하여 요청을 통과시킵니다.
            </div>
          </div>
        `,
        practice: {
          prompt: "도커 이미지 'spring-app:latest'를 'demo-server'라는 컨테이너명으로 지정하여, 백그라운드(-d)로 실행하되 외부 포트 80번을 컨테이너 내부 포트 8080번에 연결하는 도커 가동 명령을 작성해 보세요.",
          expectedCommand: "docker run -d -p 80:8080 --name demo-server spring-app:latest",
          commandHint: "docker run -d -p [호스트포트]:[컨테이너포트] --name [이름] [이미지] 순서로 공백을 맞춰 작성하세요.",
          successMessage: "정답입니다! 이 명령어를 통해 외부 브라우저에서 포트 번호를 치지 않아도(기본 80) 내부의 스프링 포트 8080으로 자연스럽게 트래픽이 유입됩니다."
        },
        quiz: {
          question: "실행 중인 도커 컨테이너가 뜬금없이 오류가 나며 종료되었거나, 내부 시스템 로그(예: Spring Exception Stacktrace)를 모니터링하고 싶을 때 실시간 추적을 위해 사용하는 명령어는 무엇인가요?",
          options: [
            "docker ps -a",
            "docker run -d",
            "docker logs -f [컨테이너명]",
            "docker inspect [컨테이너명]"
          ],
          correctIndex: 2,
          explanation: "docker logs -f [컨테이너명] 명령을 내리면, 컨테이너 표준 출력(Stdout)으로 쏟아지는 자바 콘솔 로그를 터미널에서 실시간으로 스트리밍하여 트러블슈팅할 수 있습니다."
        }
      }
    ]
  },
  {
    id: "module-4",
    title: "4. 다양한 서버 배포 방법론 비교",
    sections: [
      {
        id: "4-1",
        title: "전통적인 수동 SFTP 배포 (FileZilla)와 한계점",
        description: "가장 원시적인 방식인 SFTP 업로드 배포 방식의 상세 절차와 치명적인 다운타임 한계를 살펴봅니다.",
        content: `
          <h3>수동 배포(Manual Deployment) 과정</h3>
          <p>자동화 툴이 없던 시절, 혹은 단순 소규모 세팅 시 사용하는 전통적 흐름입니다.</p>
          <ol>
            <li><strong>로컬 빌드</strong>: 내 PC에서 <code>./gradlew clean build</code>를 돌려 JAR 파일을 만듭니다.</li>
            <li><strong>SFTP 연결</strong>: 파일 전송 프로그램인 <strong>FileZilla(파일질라)</strong> 등을 다운로드해 원격 AWS EC2 서버의 SSH 정보를 입력하여 접속합니다. (22번 포트 활용)</li>
            <li><strong>파일 전송</strong>: <code>build/libs/demo.jar</code> 파일을 드래그 앤 드롭으로 서버의 <code>/home/ubuntu/</code> 경로로 업로드합니다.</li>
            <li><strong>직접 명령어 실행</strong>: 서버 터미널에 SSH로 로그인해서 기존 백그라운드 프로세스를 찾아 죽인 뒤(<code>kill -9 [PID]</code>), 새 JAR를 백그라운드로 켭니다.</li>
          </ol>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">수동 백그라운드 실행 명령어</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('nohup java -jar demo.jar > app.log 2>&1 &')">Copy</button>
            </div>
            <div class="code-body">
              <pre>nohup java -jar demo.jar > app.log 2>&1 &</pre>
            </div>
          </div>
          
          <ul>
            <li><code>nohup</code>: 터미널 세션 접속이 해제되어도 프로세스가 꺼지지 않고 유지되도록 보장합니다.</li>
            <li><code>> app.log 2>&1</code>: 출력되는 표준 로그와 에러 로그를 <code>app.log</code>라는 파일에 기록합니다.</li>
            <li><code>&</code>: 백그라운드에서 프로세스를 가동하여 터미널 입력을 계속 살려둡니다.</li>
          </ul>

          <div class="warning-box">
            <div class="warning-box-title">❌ 수동 배포의 치명적 한계점</div>
            <div class="warning-box-content">
              새로운 버전의 JAR를 적용하여 다시 배포하려면, 반드시 기존에 가동 중이던 서버 프로세스를 찾아서 꺼야(Kill) 합니다. <strong>기존 프로세스가 꺼진 순간부터 새로운 JAR가 구동되어 요청을 받을 준비(Warm-up)를 끝마치기 전까지의 수십 초~수 분 동안 사용자는 서비스에 전혀 접속할 수 없는 장애 상황(Downtime)을 겪게 됩니다.</strong>
            </div>
          </div>
        `,
        practice: {
          prompt: "서버 터미널에서 백그라운드로 작동하고 있는 자바 프로세스의 PID가 '3412'인 것을 발견했습니다. 새로운 배포를 위해 이 프로세스를 즉시 강제 종료시키는 리눅스 명령어를 적어보세요.",
          expectedCommand: "kill -9 3412",
          commandHint: "kill 명령어에 강제 종료 옵션(-9)을 붙이고 뒤에 PID 번호를 적어줍니다.",
          successMessage: "정답입니다! kill -9 명령은 비정상 루프나 재배포 시 프로세스를 강제 청소하기 위한 명령입니다."
        },
        quiz: {
          question: "전통적 SFTP 수동 배포 방식에서 발생하는 다운타임(Downtime, 접속 중단 시간)의 근본적인 원인은 무엇인가요?",
          options: [
            "파일 전송 프로그램인 FileZilla가 너무 느리기 때문",
            "동일 포트(8080)에 대기 중인 기존 버전을 완전히 강제 중지시킨 후에야 신규 버전을 가동할 수 있기 때문",
            "AWS 보안 그룹이 매번 자동으로 차단 규칙을 생성하기 때문",
            "스프링 부트 빌드 시 테스트 코드가 실패했기 때문"
          ],
          correctIndex: 1,
          explanation: "네트워크 통신에서 특정 포트(예: 8080)는 단 한 개의 프로세스만 리스닝 상태로 점유할 수 있습니다. 신규 버전을 띄우기 위해 구버전 프로세스를 종료해야 하므로, 신규 버전이 메모리에 완전히 로드될 때까지 서비스가 불능 상태가 되는 공백(다운타임)이 발생합니다."
        }
      },
      {
        id: "4-2",
        title: "컨테이너 배포 및 자동화(CI/CD) 소개",
        description: "지속적 통합(CI)과 지속적 배포(CD) 파이프라인의 핵심 개념을 도식으로 이해합니다.",
        content: `
          <h3>CI/CD란 무엇인가요?</h3>
          <p>현대 애자일 개발 체제에서는 개발자가 소스 코드를 하루에도 수차례 수정합니다. 이를 매번 수동으로 빌드하고, 파일질라를 켜서 올리고, 명령어를 치는 것은 비효율적이며 실수를 유발합니다.</p>
          <p>이를 기계가 대신 자동으로 처리하게 만든 공장 파이프라인 시스템을 <strong>CI/CD</strong>라고 부릅니다.</p>

          <ul>
            <li><strong>CI (Continuous Integration - 지속적 통합)</strong>: 개발자가 GitHub 같은 저장소에 코드를 올리면(Push), 원격 빌드 로봇이 코드를 땡겨와 테스트를 자동으로 수행하고 컴파일하여 빌드 파일(또는 Docker 이미지)을 생성 및 보관합니다.</li>
            <li><strong>CD (Continuous Deployment - 지속적 배포)</strong>: 빌드된 산출물을 원격 AWS EC2 서버에 전달하고, 도커 컨테이너를 다시 내리고 신규 이미지로 올려 실행하는 배포 행위를 자동으로 처리합니다.</li>
          </ul>

          <div class="info-box">
            <div class="info-box-title">🐳 도커 컨테이너 배포의 깔끔함</div>
            <div class="info-box-content">
              도커 컨테이너 배포를 활용하면 서버에 JAR 파일을 수동 복사할 필요 없이, 도커 레지스트리(Docker Hub 등)에 이미지만 업로드해 두고 서버에서는 <code>docker pull</code> 후 <code>docker run</code> 명령어만 한 줄 쳐주면 끝납니다. 서버 OS에 자바나 설정 복잡도를 따로 구성할 필요가 없어 매우 깔끔합니다.
            </div>
          </div>
        `,
        practice: {
          prompt: "원격 도커 이미지 저장소인 Docker Hub에 업로드된 최신 버전의 이미지 'myid/spring-app:latest'를 로컬/서버 컴퓨터 파일 시스템으로 동기화하여 다운로드받는 도커 명령을 써보세요.",
          expectedCommand: "docker pull myid/spring-app:latest",
          commandHint: "도커 이미지를 땡겨(다운로드)받는 명령어인 docker pull 뒤에 이미지 전체 경로를 적습니다.",
          successMessage: "정답입니다! docker pull 명령으로 내려받은 이미지는 캐싱 처리되어 서버에서 초고속 구동이 준비됩니다."
        },
        quiz: {
          question: "CI/CD에 대한 개념 중 매칭이 잘못 서술된 것은 무엇인가요?",
          options: [
            "CI: 코드가 안전한지 확인하는 컴파일 및 자동 단위 테스트 단계",
            "CD: 최종 빌드 완료된 프로그램을 대상 운영 서버에 배포하는 자동화 과정",
            "GitHub: 세계적으로 가장 널리 사용되는 형상 관리 및 CI/CD 워크플로 플랫폼 중 하나",
            "Dockerfile: 소스 코드 커밋 내역을 분석해 개발자의 실수 패턴을 고쳐주는 인공지능 도구"
          ],
          correctIndex: 3,
          explanation: "Dockerfile은 단순히 도커 컨테이너 이미지를 빌드하기 위한 환경 세팅 지시서 파일일 뿐이며, 개발자의 코딩 버그나 로직 실수를 검출하여 대신 고쳐주는 AI 에이전트 소프트웨어가 아닙니다."
        }
      }
    ]
  },
  {
    id: "module-5",
    title: "5. Nginx 핵심 설정 및 리버스 프록시",
    sections: [
      {
        id: "5-1",
        title: "Nginx의 동작 구조와 경량 고성능의 비밀",
        description: "이벤트 기반 비동기 아키텍처의 혁신을 통해 Nginx가 왜 대세 웹 서버가 되었는지 분석합니다.",
        content: `
          <h3>Nginx가 탄생한 배경: C10K 문제</h3>
          <p>과거에는 <strong>Apache Web Server(아파치)</strong>가 웹 서버 시장을 지배했습니다. 하지만 인터넷 인구가 폭발하며 "한 번에 1만 명 이상의 동시 접속(C10K - Connection 10,000)" 요청이 들어오자 아파치는 뻗어버렸습니다.</p>
          <p>아파치는 사용자 요청이 올 때마다 <strong>새로운 스레드나 프로세스</strong>를 생성해 할당했습니다. 동시 접속자가 늘어날수록 시스템 메모리가 꽉 차고, CPU는 컨텍스트 스위칭(Context Switching, 일 번갈아 하기) 연산 과부하로 아무 처리도 할 수 없는 상태가 되었습니다.</p>

          <div class="info-box">
            <div class="info-box-title">⚡ Nginx의 비밀: 비동기 이벤트 루프(Event Loop)</div>
            <div class="info-box-content">
              Nginx는 소수의 <strong>마스터/워커(Worker) 프로세스</strong>만 띄워놓고, 들어오는 수많은 요청을 <strong>이벤트(Event)</strong>라는 신호 단위로 바인딩하여 큐에 쌓아둡니다.
              스레드를 새로 파지 않고 하나의 싱글 스레드가 이벤트 루프를 고속으로 돌며 신호를 빠르게 비동기 분배하기 때문에, 메모리가 거의 늘어나지 않으며 수만 명의 동시 사용자 요청도 지연 없이 가볍게 소화해 냅니다.
            </div>
          </div>
        `,
        practice: {
          prompt: "Nginx의 환경 설정이 문법적으로 어긋난 곳이 없는지 검증하는 터미널 점검 옵션 명령어를 입력해 보세요. (실제 reload나 restart 전에 수행하는 안심용 명령입니다.)",
          expectedCommand: "nginx -t",
          commandHint: "test의 약자인 -t 플래그를 nginx 명령어 뒤에 붙여 입력합니다.",
          successMessage: "정답입니다! nginx -t 명령은 수정한 설정 파일에 세미콜론(;) 누락 등 오타가 없는지 컴파일 수준에서 실시간 검증합니다."
        },
        quiz: {
          question: "Nginx가 아파치(Apache)와 비교하여 갖는 아키텍처 관점의 가장 큰 기술적 특징은 무엇입니까?",
          options: [
            "모든 요청에 대해 프로세스를 무제한 생성하여 메모리 용량을 증설한다.",
            "싱글/소수 워커 프로세스가 논블로킹(Non-blocking) 이벤트 루프 형식으로 비동기 동작한다.",
            "리눅스 운영체제 환경에서는 작동할 수 없고 윈도우 서버만 지원한다.",
            "스프링 부트(Tomcat) 소스 코드를 자바 파일로 강제 번역해 준다."
          ],
          correctIndex: 1,
          explanation: "Nginx는 이벤트 주도(Event-Driven) 방식을 적용하여 적은 양의 고정 리소스만으로 수많은 커넥션을 대기/처리할 수 있는 경량 고성능 엔진 구조를 가지고 있습니다."
        }
      },
      {
        id: "5-2",
        title: "리버스 프록시(Reverse Proxy) 설정 가이드",
        description: "사용자가 서버 내부 포트 번호를 알 필요 없도록 감싸주고 전달해 주는 중개 가동을 구성합니다.",
        content: `
          <h3>리버스 프록시(Reverse Proxy)란?</h3>
          <p>사용자(클라이언트)가 웹 서버에 요청을 보낼 때, 웹 서버(Nginx)가 요청을 받아 내부 서버(WAS / Spring Boot)에 전달하고 그 응답을 대신 받아 사용자에게 리턴해 주는 <strong>대리 운전기사</strong> 역할을 말합니다.</p>
          <p>클라이언트는 실제 가동 중인 백엔드 서버의 포트(8080)나 내부 IP를 전혀 모르고, 오직 안전하게 노출된 80번(Nginx 웹 서버) 포트로만 통신하게 되므로 보안상 극도로 유리해집니다.</p>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">/etc/nginx/nginx.conf (기본 리버스 프록시 설정 템플릿)</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('server {\n    listen 80;\n    server_name my-domain.com;\n\n    location / {\n        proxy_pass http://127.0.0.1:8080;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    }\n}')">Copy</button>
            </div>
            <div class="code-body">
              <pre><code>server {
    listen 80;                     # 1. 사용자가 접속할 포트 (HTTP 기본 80)
    server_name my-domain.com;     # 2. 도메인 매핑 설정

    location / {                   # 3. 루트(/) 경로로 접속 시 작동 규칙
        proxy_pass http://127.0.0.1:8080;  # 4. 뒤쪽 백엔드 WAS(Spring Boot) 포트로 패스

        # 5. 프록시 가동 시 클라이언트의 실제 IP와 호스트 정보를 헤더에 실어 전달
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}</code></pre>
            </div>
          </div>

          <h4>왜 proxy_set_header 설정이 필요한가요?</h4>
          <p>Nginx가 중간에서 중개인 역할을 해버리면, 뒤쪽에 있는 Spring Boot는 사용자가 보낸 요청을 Nginx가 요청한 것으로 오해하게 됩니다. 스프링에서 클라이언트의 원래 접속 IP를 로깅하거나 식별하려면 Nginx 측에서 원래 유저의 헤더 정보(<code>X-Real-IP</code> 등)를 파라미터로 붙여서 포워딩해주어야 합니다.</p>
        `,
        practice: {
          prompt: "수정한 nginx.conf 설정 파일을 서버 정지 없이 즉시 서비스에 반영(재로드)하기 위해 실행하는 Nginx CLI 시그널 명령어를 작성하세요.",
          expectedCommand: "sudo nginx -s reload",
          commandHint: "관리자 권한 sudo 뒤에 nginx의 시그널 송신 옵션(-s)과 reload 명령어를 기재합니다.",
          successMessage: "정답입니다! nginx -s reload 명령어는 구동 중인 연결(Active Connection)들을 보전하면서 설정을 부드럽게 새로고침합니다."
        },
        quiz: {
          question: "Nginx의 프록시 설정 중 proxy_pass http://127.0.0.1:8080; 이 지시어의 실제 작용은 무엇인가요?",
          options: [
            "들어오는 유저의 아이디와 패스워드가 올바른지 인증 검사를 수행한다.",
            "80포트로 들어온 요청을 스프링이 실행 중인 내부 8080포트로 바이패스(전송)한다.",
            "백업 서버 컴퓨터를 자동으로 켜고 디스크를 포맷한다.",
            "자바 에러를 탐색해 원본 소스코드로 재컴파일해 준다."
          ],
          correctIndex: 1,
          explanation: "proxy_pass는 들어온 클라이언트 트래픽 요청을 명시된 대상 프록시 경로(여기서는 내부의 8080포트 서비스)로 패싱하여 대리 처리하도록 위임하는 핵심 포워딩 지시자입니다."
        }
      },
      {
        id: "5-3",
        title: "로드 밸런싱(Load Balancing) 아키텍처 구성",
        description: "사용자가 몰렸을 때 여러 대의 WAS로 트래픽을 지능적으로 찢어 분배하는 이중화 설정을 배웁니다.",
        content: `
          <h3>로드 밸런싱(Load Balancing)이란?</h3>
          <p>방문자 수가 너무 많아 단 한 대의 Spring Boot WAS 서버 컴퓨터가 터질 것 같다면, 똑같은 가상 컴퓨터 WAS 2~3대를 나란히 옆에 배치할 수 있습니다. Nginx는 최전방에서 트래픽을 고르게 찢어 분배하는 <strong>교통경찰(Load Balancer)</strong>이 됩니다.</p>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">Upstream 로드 밸런싱 설정 예시</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('upstream backend_cluster {\n    server 127.0.0.1:8081 weight=3;\n    server 127.0.0.1:8082;\n}\n\nserver {\n    listen 80;\n    location / {\n        proxy_pass http://backend_cluster;\n    }\n}')">Copy</button>
            </div>
            <div class="code-body">
              <pre><code># 1. 뒤쪽에 대기할 WAS 서버 떼거리(Upstream Cluster) 정의
upstream backend_cluster {
    server 127.0.0.1:8081 weight=3; # 더 강력한 서버에 트래픽 가중치 3배 부여
    server 127.0.0.1:8082;          # 기본 가중치 1
}

server {
    listen 80;

    location / {
        # 2. upstream 블록의 이름으로 트래픽 패스
        proxy_pass http://backend_cluster;
    }
}</code></pre>
            </div>
          </div>

          <h4>대표적인 로드 밸런싱 분배 정책</h4>
          <ul>
            <li><strong>라운드 로빈 (Round Robin)</strong>: 기본값. 번갈아가며 요청을 1대1 순서대로 분배합니다.</li>
            <li><strong>가중치 분배 (Weight)</strong>: 특정 서버 성능이 압도적일 경우 <code>weight</code> 수치를 지정하여 더 많은 호출을 처리하도록 처리합니다.</li>
            <li><strong>최소 연결 (Least Connections)</strong>: 현재 실시간 커넥션이 가장 적은 널널한 서버에 배정합니다.</li>
            <li><strong>IP 해시 (IP Hash)</strong>: 유저의 IP 주소를 해싱하여 항상 특정 서버로 가도록 묶어줍니다. (세션 유지가 급할 때 임시방편으로 활용)</li>
          </ul>
        `,
        practice: {
          prompt: "가상 클러스터를 묶기 위해 Nginx 설정 내부에 선언하는, 뒤쪽 백엔드 서버 그룹 정의 지시어의 영문 스펠링을 입력하세요.",
          expectedCommand: "upstream",
          commandHint: "상류(위쪽 물줄기)라는 단어의 소문자 형태입니다.",
          successMessage: "정답입니다! upstream 블록 정의를 통해 스프링 서버 집단을 하나의 대리명으로 묶을 수 있습니다."
        },
        quiz: {
          question: "Nginx 로드 밸런싱의 IP 해시(IP Hash) 방식은 주로 어떤 비즈니스 시나리오에서 활발하게 차용됩니까?",
          options: [
            "성능이 다른 여러 대의 서버에 트래픽을 가중치 별로 차등 분산하고 싶을 때",
            "로그인 세션 정보가 분산 DB에 동기화되지 않아 유저가 한 번 접속했던 동일한 WAS 서버에만 계속 매핑되어야 할 때",
            "정적 이미지를 브라우저에 최대한 빠른 속도로 캐싱할 때",
            "전송되는 데이터 파일의 패킷 암호화를 보장할 때"
          ],
          correctIndex: 1,
          explanation: "IP Hash는 사용자의 소스 IP 정보를 기준으로 균등 분배 해시 연산을 하여 항상 특정한 대상 호스트 WAS에 고정 바인딩하므로 세션 정합성(Session Sticky) 문제를 해결하기 위해 주로 쓰입니다."
        }
      }
    ]
  },
  {
    id: "module-6",
    title: "6. AWS S3 + CloudFront + Route 53 배포",
    sections: [
      {
        id: "6-1",
        title: "Amazon S3를 이용한 정적 웹 사이트 호스팅",
        description: "클라우드 스토리지 객체 저장소에 프론트엔드(React 빌드 결과물) 소스를 배포하고 정적 호스팅을 구성합니다.",
        content: `
          <h3>S3(Simple Storage Service)란 무엇인가요?</h3>
          <p>S3는 가상 디스크 공간을 무제한으로 쓸 수 있는 클라우드 파일 보관함(객체 스토리지)입니다. 자바처럼 서버의 연산이 필요한 프로그램은 올릴 수 없지만, HTML, CSS, Javascript, 이미지 파일처럼 브라우저가 그냥 다운받아 읽는 <strong>정적 소스</strong>는 서버 컴퓨터 없이 S3 단독으로 웹 사이트 서비스를 호스팅할 수 있습니다.</p>

          <h3>React/프론트엔드 S3 배포 핵심 단계</h3>
          <ol>
            <li><strong>S3 버킷(Bucket) 생성</strong>: AWS 리전에 유일한 이름의 버킷 폴더를 생성합니다.</li>
            <li><strong>퍼블릭 액세스 차단 해제</strong>: 누구나 인터넷에서 접속해 정적 파일을 읽을 수 있도록 '퍼블릭 액세스 차단 해제' 상태로 설정합니다.</li>
            <li><strong>정적 웹 사이트 호스팅 활성화</strong>: 버킷 속성 탭 하단에서 정적 웹 사이트 호스팅을 켜고, 기본 문서를 <code>index.html</code>로 지정합니다.</li>
            <li><strong>버킷 정책(Bucket Policy) 등록</strong>: 외부 방문객이 접근하면 읽기 권한을 주도록 정책 JSON을 추가합니다.</li>
          </ol>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">S3 퍼블릭 읽기 권한 정책 JSON</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('{\n  \&quot;Version\&quot;: \&quot;2012-10-17\&quot;,\n  \&quot;Statement\&quot;: [\n    {\n      \&quot;Sid\&quot;: \&quot;PublicReadGetObject\&quot;,\n      \&quot;Effect\&quot;: \&quot;Allow\&quot;,\n      \&quot;Principal\&quot;: \&quot;*\&quot;,\n      \&quot;Action\&quot;: \&quot;s3:GetObject\&quot;,\n      \&quot;Resource\&quot;: \&quot;arn:aws:s3:::my-bucket-name/*\&quot;\n    }\n  ]\n}')">Copy</button>
            </div>
            <div class="code-body">
              <pre><code>{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::my-bucket-name/*" # 여기에 내 버킷명 대입
    }
  ]
}</code></pre>
            </div>
          </div>
        `,
        practice: {
          prompt: "S3 버킷의 정적 호스팅 기능이 활성화되었을 때, 버킷에 업로드된 객체를 조회(Read)할 수 있도록 허용하는 AWS 정책 내 Action 속성에 들어갈 S3 전용 호출 키워드를 입력해 보세요.",
          expectedCommand: "s3:GetObject",
          commandHint: "s3 서비스의 Object(객체)를 가져오는(Get) 액션 이름입니다.",
          successMessage: "정답입니다! s3:GetObject 권한은 외부에 웹 리소스를 제공하기 위해 버킷 정책에 필수로 명시해야 하는 기치입니다."
        },
        quiz: {
          question: "React 빌드 폴더(dist 또는 build)를 S3 버킷에 올려 호스팅할 때, index.html 외에 라우팅 오류 방지를 위해 오류 문서(Error Document) 설정 역시 동일하게 index.html로 적어주는 이유는 무엇인가요?",
          options: [
            "S3가 404 에러 파일을 강제로 변환할 수 없어서",
            "React의 SPA(Single Page Application) 클라이언트 라우터가 모든 세부 주소(/login, /main 등) 분기 처리를 전담하기 때문에 일단 404가 나도 index.html을 돌려주어야 로직 작동이 가능해서",
            "S3가 자바 런타임을 내부에 장착하고 있어서",
            "에러가 나면 사이트를 무조건 폐쇄하는 것이 AWS 약관 규칙이라서"
          ],
          correctIndex: 1,
          explanation: "React는 SPA 구조입니다. 실제 물리 디렉토리에 /login 같은 하위 폴더나 html 파일이 없고, 단 하나의 index.html 내부 스크립트가 주소를 감지해 동적 렌더링하므로, S3가 주소를 찾지 못해 404를 반환하면 index.html로 리다이렉팅해주어야 라우팅 오류가 발생하지 않습니다."
        }
      },
      {
        id: "6-2",
        title: "AWS CloudFront 적용 및 캐싱 제어",
        description: "전 세계 사용자에게 초고속 파일 배포를 제공하고 HTTPS 보안 통신을 입혀주는 CDN 기술을 적용합니다.",
        content: `
          <h3>CloudFront(CDN)란 무엇인가요?</h3>
          <p>S3로만 정적 사이트를 제공하면 사용자가 서버 리전(예: 서울)에서 먼 미국이나 유럽에 있을 때 파일 로드가 상당히 느립니다. 또한 S3 자체는 기본 웹호스팅 시 HTTPS 보안 연결을 공식 지원하지 않습니다.</p>
          <p><strong>CloudFront</strong>는 AWS가 자랑하는 <strong>글로벌 CDN(Content Delivery Network)</strong> 서비스입니다. 전 세계 수백 군데의 물리적 엣지 로케이션(Edge Location) 캐시 서버에 우리의 프론트엔드 정적 파일들을 캐싱하여, 유저와 가장 가까운 지점에서 빛의 속도로 전송해 줍니다.</p>

          <div class="info-box">
            <div class="info-box-title">🔒 OAI / OAC (Origin Access Control) 보안 설정</div>
            <div class="info-box-content">
              사용자가 S3 주소로 직접 들어가면 S3 원본 보안이 위태로워집니다. 이를 막기 위해 S3 버킷의 퍼블릭 정책을 다시 닫고, 오직 <strong>CloudFront만 S3 버킷에 접근할 수 있도록 노선을 통제</strong>하는 기능이 OAI/OAC입니다.
            </div>
          </div>

          <h3>캐시 무효화 (Cache Invalidation)</h3>
          <p>우리가 리액트 프론트엔드를 대대적으로 수정해 새로 빌드하고 S3에 올려도, 사용자는 여전히 옛날 웹 화면을 보게 되는 현상이 있습니다. CloudFront의 캐시 유효 기간(TTL)이 남았기 때문입니다. 신속하게 새 버전을 뿌리려면 CloudFront 콘솔의 Invalidation(무효화) 탭에서 <code>/*</code>을 쳐서 강제로 캐시를 파기 및 새로고침해주어야 합니다.</p>
        `,
        practice: {
          prompt: "CloudFront에 캐싱되어 정체되어 있는 모든 캐시 리소스를 강제로 무효화(삭제)하기 위해 생성하는 무효화 경로 설정값을 작성해 보세요.",
          expectedCommand: "/*",
          commandHint: "모든 파일과 하위 주소를 다 지칭하는 와일드카드 문자 기호를 포함해 적어줍니다.",
          successMessage: "정답입니다! /* 무효화를 적용하면 CloudFront의 엣지 서버들이 보유하고 있던 구버전 캐시를 즉각 파기하고 S3 최신 원본을 다시 동기화합니다."
        },
        quiz: {
          question: "CloudFront를 S3 버킷 앞에 배치할 때의 혜택으로 가장 타당하지 않은 기술적 요소는 무엇인가요?",
          options: [
            "글로벌 캐시 엣지를 통해 해외 사용자의 사이트 접속 로딩 속도가 비약적으로 향상된다.",
            "HTTPS(SSL/TLS) 프로토콜을 사용한 암호화 보안 통신을 손쉽게 연결할 수 있다.",
            "스프링 부트 자바 코드를 디버깅하고 널 포인터 예외(NPE)를 실시간 모니터링하여 고쳐준다.",
            "OAC 보안 기능을 연동해 S3 원본 저장소 주소로의 무분별한 직접 접근을 차단한다."
          ],
          correctIndex: 2,
          explanation: "CloudFront는 CDN 콘텐츠 캐싱 및 HTTPS 배포용 인프라 제품군일 뿐이므로, 백엔드 스프링 코드 상의 버그 예외(NPE 등) 디버깅 및 고침 역할과는 연관성이 전혀 존재하지 않습니다."
        }
      },
      {
        id: "6-3",
        title: "Route 53 DNS 연결 및 ACM 무료 SSL 인증서 장착",
        description: "나만의 고유 도메인을 구매 연결하고 신뢰할 수 있는 무료 HTTPS 인증 기관을 세팅합니다.",
        content: `
          <h3>웹의 최종 관문: 나만의 도메인</h3>
          <p>임시 AWS IP 주소나 CloudFront 긴 기본 도메인(<code>dxxx.cloudfront.net</code>) 대신에 <code>my-service.shop</code>처럼 진짜 나만의 도메인 주소로 접속하도록 세팅합니다.</p>
          
          <h3>Route 53 & ACM 연동 아키텍처 흐름</h3>
          
          <ol>
            <li><strong>도메인 등록</strong>: 가비아나 GoDaddy 혹은 Route 53 자체 등록을 통해 도메인 주소의 소유권을 획득합니다.</li>
            <li><strong>Route 53 호스팅 영역(Hosted Zone) 생성</strong>: AWS Route 53로 내 도메인을 조율하기 위해 연결판을 구축합니다.</li>
            <li><strong>네임서버(NS) 교체</strong>: 가비아 등에서 구매했다면 가비아 도메인 설정 페이지에 Route 53의 NS 주소 4줄을 등록해 권한을 AWS로 넘깁니다.</li>
            <li><strong>ACM(AWS Certificate Manager) 인증서 발급</strong>: 무료 SSL/TLS 인증서 발급 요청을 보냅니다. (이때 도메인의 실소유주 인증을 위한 CNAME 검증 레코드를 Route 53에 버튼 하나로 자동 등록합니다.)</li>
            <li><strong>CloudFront에 별칭 도메인(CNAME) 및 SSL 지정</strong>: CloudFront 설정에 <code>my-service.shop</code>을 입력하고 ACM에서 발급한 인증서를 매핑합니다.</li>
            <li><strong>Route 53 A 레코드 레코드(Alias) 지정</strong>: Route 53에 <code>my-service.shop</code>에 대해 <strong>CloudFront 배포 주소</strong>로 대상 A 레코드를 매핑합니다.</li>
          </ol>
        `,
        practice: {
          prompt: "인증서 검증이나 도메인 서비스 주소 이동 시 사용되며, 도메인의 목적지를 특정 도메인명(예: d123.cloudfront.net)으로 다른 별칭 지정 연결을 해주는 DNS 레코드 유형은 무엇일까요? (대문자로 작성하세요.)",
          expectedCommand: "CNAME",
          commandHint: "Canonical Name의 약자로, 도메인의 서브 도메인을 타사 서버 도메인 주소에 대행 연결할 때 애용되는 타입입니다.",
          successMessage: "정답입니다! CNAME 레코드는 도메인을 다른 도메인명으로 포인팅하여 IP 변경 시에도 무중단 갱신을 가능케 돕는 DNS 핵심 유형입니다."
        },
        quiz: {
          question: "Route 53에서 A 레코드 생성 시 '대체 별칭(Alias)' 기능을 활용해 CloudFront 배포 주소를 목적지로 지정하는 방식의 장점은 무엇인가요?",
          options: [
            "인증 기관(ACM) 결제 비용이 완전히 인하된다.",
            "목적지 IP 주소를 직접 입력할 필요가 없으며, AWS 내부적으로 CloudFront의 가변 IP 변화를 추적하여 Route 53의 별도 비용 없이 A 레코드 형식의 도달을 보장해 준다.",
            "도커 컨테이너 내부 환경 파일이 자동 백업된다.",
            "중국 내 수천 개 방화벽을 전부 무력화 우회해 준다."
          ],
          correctIndex: 1,
          explanation: "CloudFront와 같은 분산 서비스의 IP 주소는 수시로 가변됩니다. Route 53 별칭(Alias) 기능을 써서 CloudFront 별명을 목적지로 해두면 AWS 내부 네트워크 인프라가 실시간 추적하여 목적지를 A레코드 속도로 정확히 갱신해주며 추가 네임서버 비용 또한 청구되지 않습니다."
        }
      }
    ]
  },
  {
    id: "module-7",
    title: "7. Nginx + Docker 무중단 배포 (Blue-Green) 자동화",
    sections: [
      {
        id: "7-1",
        title: "Blue-Green 무중단 배포 메커니즘 이론",
        description: "재배포 동안 1초의 중단도 허락하지 않는 블루-그린 배포 시나리오를 숙지합니다.",
        content: `
          <h3>Blue-Green 무중단 배포 시나리오</h3>
          <p>사용자 트래픽이 몰리는 상태에서 신규 기능을 릴리즈할 때, Nginx의 라우팅 유동성을 활용해 중단 없는 상태를 만듭니다.</p>
          
          <div class="info-box">
            <div class="info-box-title">📘 Blue(블루)와 Green(그린)의 공존 법칙</div>
            <div class="info-box-content">
              <ul>
                <li><strong>Blue 환경</strong>: 현재 사용자가 활발히 서비스에 접속해 있는 버전 (포트: <code>8081</code>)</li>
                <li><strong>Green 환경</strong>: 방금 막 빌드를 마치고 리눅스에 구동을 완료한 신규 버전 (포트: <code>8082</code>)</li>
              </ul>
            </div>
          </div>

          <h3>포트 전환을 이용한 7단계 로직 흐름</h3>
          <ol>
            <li>사용자는 Nginx 주소(기본 80)를 바라봅니다. Nginx는 현재 <strong>Blue(8081)</strong> 포트로 트래픽을 프록싱해 주고 있습니다.</li>
            <li>새로운 버전의 패치 코드를 담은 컨테이너를 구동하지 않고 <strong>Green(8082)</strong> 포트 포트를 점유하여 별개로 컨테이너를 조용히 실행(UP)합니다.</li>
            <li>Green 서버 컴퓨터 가동이 끝나도 사용자는 여전히 Blue를 보고 있으므로 장애나 지연이 생기지 않습니다.</li>
            <li>스크립트가 Green 서버의 상태(<code>http://localhost:8082/api/health</code>)에 대해 루프를 돌며 <strong>헬스 체크(Health Check)</strong>를 진행하여 정상 응답(200 OK)이 떨어지는지 봅니다.</li>
            <li>Green이 잘 떴다면, Nginx 환경 설정 내 스프링 타겟 주소(<code>service-url.inc</code> 등)를 <code>8082</code>로 덮어쓰고 덮어버립니다.</li>
            <li>Nginx를 <strong>reload</strong> 처리하여 트래픽 방향을 단 0.001초 만에 Green으로 부드럽게 스위칭시킵니다.</li>
            <li>이제 무용지물이 된 옛날 서버 <strong>Blue(8081)</strong> 컨테이너를 가볍게 중지하고 메모리에서 소거합니다.</li>
          </ol>
        `,
        practice: {
          prompt: "현재 Blue가 8081포트로 켜져 있을 때, 신규 배포 대상 포트인 Green의 포트 번호(숫자 4자리)를 써보세요.",
          expectedCommand: "8082",
          commandHint: "블루-그린 배포 구성 시 주로 이중 구조로 8081과 8082 포트를 할당하여 교차 운행합니다.",
          successMessage: "정답입니다! 8082 포트를 사전에 바인딩하여 백그라운드 준비 프로세스를 태울 수 있습니다."
        },
        quiz: {
          question: "Nginx + Docker 환경에서 Blue-Green 배포 완료 시, 구버전(Blue)의 도커 컨테이너는 최종적으로 어떤 상태로 정리되어야 합니까?",
          options: [
            "서버 백업을 위해 끄지 않고 계속 동시 병렬 가동해 둔다.",
            "새버전의 정상 작동을 확인한 뒤 안전하게 docker stop과 docker rm 처리를 하여 시스템 리소스(메모리)를 환수한다.",
            "도커 이미지를 삭제하고 컴퓨터 전원을 즉시 차단한다.",
            "데이터베이스를 초기화하고 리눅스를 클린 포맷한다."
          ],
          correctIndex: 1,
          explanation: "트래픽 전환이 성공하면 이전 구버전 컨테이너는 더 이상 요청을 받지 않으므로 stop 및 rm 조치하여 리소스 낭비를 방지해야 합니다. 다음번 재배포 시에는 반대로 해당 포트가 Green(신규)이 될 차례입니다."
        }
      },
      {
        id: "7-2",
        title: "배포 스위칭 자동화 쉘 스크립트 작성",
        description: "포트 판별, 헬스 체크, nginx 스위칭을 전담하는 쉘 스크립트(deploy.sh)를 뜯어봅니다.",
        content: `
          <h3>deploy.sh 핵심 흐름 해설</h3>
          <p>서버에 새로운 빌드 이미지가 유입되었을 때, 이를 감지하고 지능적으로 무중단 교대를 완수해 내는 핵심 쉘 스크립트 구조입니다.</p>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">deploy.sh (무중단 쉘 스크립트 뼈대)</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('#!/bin/bash\n\n# 1. 현재 Nginx가 가리키고 있는 포트 조회\nCURRENT_PORT=$(curl -s http://localhost/profile)\nif [ \&quot;$CURRENT_PORT\&quot; = \&quot;8081\&quot; ]; then\n    TARGET_PORT=8082\n    OLD_PORT=8081\nelse\n    TARGET_PORT=8081\n    OLD_PORT=8082\nfi\n\n# 2. 신규 포트에 새 도커 컨테이너 띄우기\ndocker run -d -p $TARGET_PORT:8080 --name app-$TARGET_PORT spring-app:latest\n\n# 3. 신규 컨테이너가 정상 작동(Health)하는지 최대 10번 검사\nfor RETRY in {1..10}\ndo\n    UP=$(curl -s http://localhost:$TARGET_PORT/api/health)\n    if [ -n \&quot;$UP\&quot; ]; then\n        break\n    fi\n    sleep 3\ndone\n\n# 4. Nginx 전환 및 리로드\necho \&quot;set \\$service_url http://127.0.0.1:$TARGET_PORT;\&quot; | sudo tee /etc/nginx/conf.d/service-url.inc\nsudo nginx -s reload\n\n# 5. 기존 구버전 컨테이너 종료\ndocker stop app-$OLD_PORT\ndocker rm app-$OLD_PORT')">Copy</button>
            </div>
            <div class="code-body">
              <pre><code>#!/bin/bash

# 1. 현재 Nginx가 활성화하여 쓰고 있는 포트 체크 (8081 혹은 8082)
CURRENT_PORT=$(curl -s http://localhost/profile)

if [ "$CURRENT_PORT" = "8081" ]; then
    TARGET_PORT=8082
    OLD_PORT=8081
else
    TARGET_PORT=8081
    OLD_PORT=8082
fi

echo ">> 현재 작동 포트: $CURRENT_PORT -> 신규 타겟 포트: $TARGET_PORT"

# 2. 타겟 포트에 새 버전의 컨테이너를 가동
docker run -d -p $TARGET_PORT:8080 --name app-$TARGET_PORT spring-app:latest

# 3. 헬스 체크 루프 (컨테이너가 기동되어 내장 WAS가 완전히 뜰 때까지 대기)
echo ">> 헬스 체크를 시작합니다 (Target Port: $TARGET_PORT)"
for RETRY in {1..10}
do
    UP=$(curl -s http://localhost:$TARGET_PORT/api/health)
    if [ -n "$UP" ]; then
        echo ">> 헬스 체크 성공! 무중단 교환을 진행합니다."
        break
    fi
    echo ">> 서버 준비 중... (3초 대기)"
    sleep 3
done

# 4. Nginx 포워딩 주소를 신규 타겟 포트로 동적 파일 수정 후 재호출
echo "set \$service_url http://127.0.0.1:$TARGET_PORT;" | sudo tee /etc/nginx/conf.d/service-url.inc
sudo nginx -s reload

# 5. 구버전의 도커 컨테이너를 중지 및 삭제 처리하여 자원 환수
echo ">> 구버전 컨테이너 app-$OLD_PORT를 정리합니다."
docker stop app-$OLD_PORT
docker rm app-$OLD_PORT</code></pre>
            </div>
          </div>
        `,
        practice: {
          prompt: "작성한 쉘 스크립트 'deploy.sh' 파일에 리눅스 환경에서 가동(실행)이 가능하도록 실행 권한(+x)을 부여하는 명령어의 뒷부분을 작성해 주세요. chmod ...",
          expectedCommand: "chmod +x deploy.sh",
          commandHint: "chmod +x 파일명 형식을 지켜 작성하세요.",
          successMessage: "정답입니다! 스크립트 작성 후 리눅스 런타임에서 실행을 수행하려면 반드시 chmod +x 조치가 선행되어야 합니다."
        },
        quiz: {
          question: "Nginx의 무중단 프록시 스위칭을 실무에서 매끄럽게 처리할 때, 설정 파일(nginx.conf) 내에 127.0.0.1:8080 주소를 직접 하드코딩하지 않고 별도의 service-url.inc 파일로 분리하여 include 문법으로 참조하는 핵심적인 이유는 무엇인가요?",
          options: [
            "Nginx 자체의 설치 크기를 압축하여 디스크 공간을 줄이려고",
            "Nginx를 전체 재구동하지 않고, 포트 주소가 지정된 외부 포함 설정 파일만 스크립트가 덮어씌운 뒤 즉시 'nginx -s reload'로 가동 방향을 안전하게 바꾸게 하기 위해",
            "자바 소스 코드의 컴파일 속도를 높여주기 위해",
            "S3 버킷의 퍼블릭 차단을 실시간으로 감지하기 위해"
          ],
          correctIndex: 1,
          explanation: "nginx.conf 전체를 스크립트로 수정 및 덮어쓰는 것은 실수를 유발해 전체 인프라가 뻑나는 상황을 유발하기 쉽습니다. 스프링 접속 주소 전용 조그만 설정 조각 파일만 별도 분리하여 교체한 뒤 Nginx를 재배치하는 구조가 훨씬 안전하고 유연한 표준 설계 방식입니다."
        }
      },
      {
        id: "7-3",
        title: "GitHub Actions를 활용한 완벽한 CI/CD 워크플로",
        description: "커밋 한 번으로 배포까지 한 방에 완성하는 최종 배포 파이프라인 명세를 작성합니다.",
        content: `
          <h3>최종 CI/CD 파이프라인의 완성</h3>
          <p>이제 개발자가 기능 구현을 마친 뒤 터미널에 <code>git push origin master</code> 명령을 날려 커밋을 밀어 넣으면, 아래 명세에 따라 배포 전용 서버가 자동으로 깨어나 전체 과정을 수행해 줍니다.</p>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">.github/workflows/deploy.yml (GitHub Actions 배포 파이프라인)</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('name: Deploy\non:\n  push:\n    branches: [ master ]\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n    - name: Checkout code\n      uses: actions/checkout@v3\n    - name: Set up JDK\n      uses: actions/setup-java@v3\n      with:\n        java-version: 17\n    - name: Build with Gradle\n      run: ./gradlew clean build -x test\n    - name: Deploy via SSH\n      uses: appleboy/ssh-action@master\n      with:\n        host: \${{ secrets.EC2_HOST }}\n        username: ubuntu\n        key: \${{ secrets.EC2_KEY }}\n        script: |\n          docker pull myid/spring-app:latest\n          ./deploy.sh')">Copy</button>
            </div>
            <div class="code-body">
              <pre><code>name: Deploy Pipeline

on:
  push:
    branches: [ master ] # master 브랜치에 푸시 발생 시 작동

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    # 1. 소스코드 체크아웃
    - name: Checkout Code
      uses: actions/checkout@v3

    # 2. 원격 주자에 빌드할 자바 런타임(JDK 17) 환경 제공
    - name: Set up JDK 17
      uses: actions/setup-java@v3
      with:
        java-version: '17'
        distribution: 'temurin'

    # 3. 소스코드 컴파일 및 빌드
    - name: Build with Gradle
      run: ./gradlew clean build -x test

    # 4. (이후 Docker 이미지 빌드 및 허브 푸시 작업 수행 후)
    # 5. SSH로 운영 가상 EC2 서버 터미널 접속하여 deploy.sh 가동 위임
    - name: Remote SSH Command Execution
      uses: appleboy/ssh-action@master
      with:
        host: \${{ secrets.EC2_HOST }}
        username: ubuntu
        key: \${{ secrets.EC2_KEY }}
        script: |
          docker pull myid/spring-app:latest
          sudo ./deploy.sh</code></pre>
            </div>
          </div>

          <div class="warning-box">
            <div class="warning-box-title">🔑 GitHub Repository Secrets 보안 설정</div>
            <div class="warning-box-content">
              AWS EC2의 접속 IP 주소와 pem 키 같은 민감 정보는 소스코드 저장소인 <code>deploy.yml</code>에 그대로 노출되면 즉시 해킹의 표적이 됩니다. GitHub 프로젝트 관리 탭 내 <strong>Settings &gt; Secrets and Variables &gt; Actions</strong> 메뉴에 각각 변수명(<code>EC2_HOST</code>, <code>EC2_KEY</code>)을 지정하여 암호화 저장을 해둔 뒤, 위 스크립트처럼 꺼내 사용해야 합니다.
            </div>
          </div>
        `,
        practice: {
          prompt: "GitHub Actions 설정 파일들이 위치해야 하는 프로젝트 디렉토리 경로를 입력해 주세요. (마침표 폴더 포함)",
          expectedCommand: ".github/workflows",
          commandHint: ".github/workflows 폴더 내에 yml 설정 파일들을 생성해야 깃허브가 감지합니다.",
          successMessage: "정답입니다! .github/workflows 디렉토리에 위치한 모든 .yml 파일들은 깃허브 원격 저장소 시스템에 의해 CI/CD 스크립트 실행 스케줄로 감지 및 파싱됩니다."
        },
        quiz: {
          question: "GitHub Actions 배포 설정 중 'secrets.EC2_KEY'에 바인딩하여 넣어야 할 원격 접속 기밀 데이터 값은 무엇인가요?",
          options: [
            "GitHub 사용자 패스워드",
            "AWS EC2 인스턴스 생성 시 발급 및 로컬 보관 중인 SSH 개인 키(.pem 파일)의 전체 텍스트 묶음",
            "도커 허브의 사용자 계정 ID",
            "가비아 도메인의 네임서버 주소"
          ],
          correctIndex: 1,
          explanation: "EC2_KEY는 로컬에 다운로드하여 사용 중인 SSH 접속 프라이빗 키(.pem) 내용을 복사하여 비밀 값으로 세팅해 주어야 GitHub Actions 러너가 서버에 접속하여 쉘 스크립트를 원격 기동해 줄 수 있습니다."
        }
      }
    ]
  }
];
