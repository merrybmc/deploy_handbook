export const curriculumData = [
  {
    id: "module-1",
    title: "1. AWS 가상 컴퓨터(EC2) 대여 및 기초 설정",
    sections: [
      {
        id: "1-1",
        title: "인터넷 네트워크 기초: IP, DNS, Port",
        description: "웹 서비스를 배포하기 전에 반드시 알아야 할 IP 주소, 도메인(DNS), 그리고 포트(Port)의 기초 물리적 원리를 비유를 통해 배웁니다.",
        content: `
          <h3>1. 서버(Server)와 클라이언트(Client)의 개념</h3>
          <p>우리가 일상에서 스마트폰으로 네이버 웹툰을 보거나 구글 검색을 할 때, 우리 스마트폰(브라우저)은 <strong>클라이언트(Client - 요청자)</strong>가 되고, 네이버나 구글의 데이터 센터에 있는 24시간 켜져 있는 컴퓨터는 <strong>서버(Server - 제공자)</strong>가 됩니다.</p>
          <p>배포(Deployment)란 개발자가 로컬 컴퓨터에서 만든 웹 프로그램을 이 '24시간 켜져 있는 컴퓨터(서버)'로 복사하여, 전 세계 누구나 접속할 수 있도록 활성화하는 과정을 의미합니다.</p>

          <h3>2. IP 주소: 인터넷상의 고유한 집 주소</h3>
          <p>전 세계의 수억 대 컴퓨터가 서로를 식별하고 데이터를 주고받기 위해서는 주소가 필요합니다. 이를 <strong>IP 주소 (Internet Protocol Address)</strong>라고 합니다.</p>
          <ul>
            <li><strong>IPv4 주소</strong>: 보통 <code>13.125.22.45</code>와 같이 3자리 숫자 4개로 이루어진 주소 체계입니다.</li>
            <li><strong>공인 IP (Public IP)</strong>: 인터넷망을 통해 외부 세상 누구나 도달할 수 있는 전 세계 유일의 진짜 주소입니다. (배포용 서버는 반드시 공인 IP가 필요합니다.)</li>
            <li><strong>사설 IP (Private IP)</strong>: 공유기 밑에 묶여 있는 컴퓨터들끼리만 아는 내부 주소입니다. (외부에서는 직접 접속할 수 없습니다.)</li>
          </ul>

          <h3>3. DNS (Domain Name System): 인터넷 전화번호부</h3>
          <p>숫자로 구성된 IP 주소(예: <code>223.130.200.104</code>)를 매번 외워 접속하는 것은 불가능에 가깝습니다. 이를 위해 인간이 읽기 쉬운 문자 도메인(예: <code>naver.com</code>)을 IP 주소와 일대일 매핑해 주는 시스템을 <strong>DNS</strong>라고 합니다.</p>

          <h3>4. 포트 (Port): 컴퓨터 내부의 방 번호 (수신함)</h3>
          <p>서버 컴퓨터에 접속하는 데 성공하더라도, 그 컴퓨터 안에는 카카오톡, 데이터베이스, 웹 서버 등 수많은 프로그램이 동시에 돌고 있습니다. 유입되는 패킷이 어떤 프로그램으로 가야 하는지 구별해 주는 <strong>방 번호(혹은 수신함 번호)</strong>가 바로 <strong>포트(Port)</strong>입니다. 포트는 0번부터 65535번까지 지정 가능합니다.</p>
          
          <div class="info-box">
            <div class="info-box-title">🔒 필수 암기: 웰노운(Well-Known) 웹 포트 번호</div>
            <div class="info-box-content">
              <ul>
                <li><strong>22 (SSH)</strong>: 서버 원격 제어를 위해 관리자가 접속할 때 사용하는 보안 포트</li>
                <li><strong>80 (HTTP)</strong>: 암호화되지 않은 기본 웹 접속 포트 (주소창에 포트 생략 시 자동으로 80 포트로 유입됨)</li>
                <li><strong>443 (HTTPS)</strong>: 암호화 통신(SSL/TLS)이 적용된 보안 웹 포트</li>
                <li><strong>8080 (Spring Boot)</strong>: 스프링 부트 애플리케이션의 기본 WAS 작동 포트</li>
                <li><strong>3306 (MySQL)</strong>: 데이터베이스 접속 포트</li>
              </ul>
            </div>
          </div>
        `,
        practice: {
          prompt: "외부 클라이언트가 웹 사이트에 접속할 때 기본적으로 활용하며, 브라우저 주소창에 포트 번호를 생략하더라도 자동 매핑되는 일반 HTTP 프로토콜의 표준 포트 번호(숫자)를 입력해 보세요.",
          expectedCommand: "80",
          commandHint: "HTTP의 기본 포트는 80, HTTPS의 기본 포트는 443입니다.",
          successMessage: "정답입니다! 80번 포트는 웹 서버의 표준 수신 포트입니다."
        },
        quiz: {
          question: "IP 주소와 포트(Port)에 대한 설명 중 올바르지 않은 것은 무엇인가요?",
          options: [
            "한 대의 컴퓨터 내에서 동일한 포트 번호를 여러 프로그램이 동시에 중복 점유하여 실행할 수 있다.",
            "IP 주소가 아파트 주소라면, 포트 번호는 아파트 호수(동호수)에 비유할 수 있다.",
            "공인 IP는 외부 웹 사이트에서 내 서버를 찾아올 수 있는 진짜 물리 주소이다.",
            "SSH 원격 접속은 보통 보안이 적용된 22번 포트를 사용한다."
          ],
          correctIndex: 0,
          explanation: "특정 포트 번호(예: 8080)는 물리적 네트워크 소켓의 소유권 제약 때문에 단 하나의 프로세스(프로그램)만 독점적으로 선점하여 리스닝할 수 있습니다. 중복 점유 시 포트 바인딩 에러(Port already in use)가 발생합니다."
        }
      },
      {
        id: "1-2",
        title: "AWS EC2 가상 컴퓨터 대여 및 프리티어의 이해",
        description: "클라우드 서비스인 AWS 가입 요령과 가상 컴퓨터인 EC2 인스턴스를 직접 대여하는 단계별 절차를 배웁니다.",
        content: `
          <h3>1. 클라우드 서비스와 가상화(Virtualization)</h3>
          <p>배포 서버를 위해 진짜 컴퓨터 본체를 사고 인터넷 전용선을 설치하는 것은 비용이 무지막지하게 듭니다. 대신 아마존(AWS)이 구축해 둔 초거대 데이터 센터의 컴퓨터 자원을 가상화하여 필요한 만큼만 쪼개어 빌려 쓰는 방식을 <strong>클라우드 컴퓨팅</strong>이라고 합니다. AWS에서는 이를 <strong>EC2 (Elastic Compute Cloud)</strong>라고 부릅니다.</p>

          <h3>2. AWS 가입 및 프리티어(Free Tier)의 진실</h3>
          <p>AWS는 신규 가입자에게 12개월간 일부 가상 컴퓨터 사양(t2.micro 등)을 한 달에 750시간 무료로 쓸 수 있게 해주는 <strong>프리티어</strong> 혜택을 제공합니다. 750시간은 한 달(24시간 * 31일 = 744시간) 내내 1대의 인스턴스를 계속 켜놓아도 무료 요금 범위 안에 드는 넉넉한 시간입니다.</p>

          <div class="warning-box">
            <div class="warning-box-title">⚠️ 프리티어 사용 시 요금 폭탄 피하는 규칙</div>
            <div class="warning-box-content">
              <ul>
                <li>인스턴스를 2대 이상 켜두면 시간 합산이 들어가 요금이 청구됩니다. (반드시 사용하지 않는 인스턴스는 '종료(Terminated)' 하세요.)</li>
                <li>대여 사양을 고를 때 반드시 프리티어 태그가 붙은 <code>t2.micro</code>(또는 최신 리전의 경우 <code>t3.micro</code>)를 고르셔야 합니다.</li>
              </ul>
            </div>
          </div>

          <h3>3. EC2 인스턴스 생성(Launch) 따라하기 단계</h3>
          <ol>
            <li>AWS 콘솔에 로그인한 뒤, 리전을 <strong>아시아 태평양(서울) - ap-northeast-2</strong>로 맞춤니다.</li>
            <li>EC2 대시보드로 이동한 뒤 <strong>인스턴스 시작 (Launch Instance)</strong> 버튼을 클릭합니다.</li>
            <li><strong>이름 설정</strong>: 본인이 알아볼 수 있는 프로젝트 이름(예: <code>my-web-server</code>)을 기재합니다.</li>
            <li><strong>OS 이미지 (AMI)</strong>: 무료이면서 가장 많은 오픈소스 라이브러리와 가이드 문서를 갖춘 <strong>Ubuntu Server 22.04 LTS</strong>를 선택합니다.</li>
            <li><strong>키페어(Key Pair) 생성</strong>: 외부에서 비밀번호 없이 서버로 로그인하게 해주는 암호키 파일입니다. <code>[새 키 페어 생성]</code> 버튼을 누르고 키 페어 이름 입력 후 파일 형식은 <code>.pem</code>으로 다운로드합니다. 이 파일은 생성 시 딱 한 번만 주어지며 노출되면 서버 전체가 해킹당하므로 절대 잃어버리면 안 됩니다!</li>
          </ol>
        `,
        practice: {
          prompt: "AWS EC2 가상 머신 대여 마법사에서 OS 이미지로 선택하게 되며, 전 세계적으로 가장 널리 쓰이는 데비안 계열의 안정적이고 가벼운 무료 리눅스 배포판의 이름을 영어로 적어보세요.",
          expectedCommand: "ubuntu",
          commandHint: "U로 시작하는 6자리 소문자 명칭입니다.",
          successMessage: "정답입니다! 우분투(Ubuntu)는 서버 개발자에게 가장 친숙한 리눅스 환경입니다."
        },
        quiz: {
          question: "AWS EC2 인스턴스 생성 중 다운로드받게 되는 키페어(.pem) 파일에 대한 조치로 잘못된 것은 무엇인가요?",
          options: [
            "키페어 파일은 한 번 분실하면 AWS 측에서 재발행해 주지 않으므로 여러 경로에 잘 백업해 둔다.",
            "누구나 읽고 복사할 수 있도록 파일 권한을 최대로 열어둔다.",
            "GitHub Public 저장소에 절대 실수로 업로드해 올리지 않도록 주의한다.",
            "서버에 접속하는 로컬 터미널 명령을 칠 때 해당 파일의 로컬 경로를 반드시 명시해야 한다."
          ],
          correctIndex: 1,
          explanation: "리눅스 SSH 보안 규칙상 개인 키페어 파일의 읽기 권한이 타인에게 열려 있으면(예: 777 권한 등) '보안 위험성' 사유로 SSH 접속 자체가 영구 거부됩니다. 반드시 소유자 전용 읽기(400 권한)로 조여 두어야 합니다."
        }
      },
      {
        id: "1-3",
        title: "보안 그룹(Security Group) 규칙 수립과 방화벽 오픈",
        description: "원격 서버 컴퓨터의 네트워크 입구에 들어오는 트래픽 필터인 인바운드 방화벽 규칙을 적용합니다.",
        content: `
          <h3>1. 보안 그룹(Security Group)의 역할</h3>
          <p>보안 그룹은 AWS EC2 가상 서버 바로 바깥에 설치되는 <strong>가상 방화벽</strong>입니다. 기본적으로 AWS는 해킹 침투를 방지하기 위해 생성된 모든 포트로의 외부 유입을 <strong>전부 차단(Deny All)</strong>한 상태로 시작합니다.</p>
          <p>따라서 개발자는 외부 통로를 직접 하나하나 수동으로 허용(Allow)해주어야 합니다. 이를 <strong>인바운드 규칙(Inbound Rules)</strong>이라고 합니다. 반대로 서버 컴퓨터 내부에서 바깥 인터넷 세상으로 나가는 것은 <strong>아웃바운드 규칙(Outbound Rules)</strong>이라 하며, 기본적으로 전체 허용되어 있습니다.</p>

          <h3>2. 무조건 설정해야 할 3대 인바운드 규칙 설정법</h3>
          <p>EC2 설정 화면 중 <strong>네트워크 설정</strong> 또는 생성 완료 후 <strong>보안 그룹 편집</strong>에서 아래 세 가지를 규칙으로 넣어줍니다.</p>

          <table style="width:100%; border-collapse:collapse; margin: 1.5rem 0; font-size: 0.9rem;">
            <thead>
              <tr style="border-bottom: 2px solid var(--border-color); text-align: left; background-color: var(--bg-tertiary);">
                <th style="padding: 10px;">유형</th>
                <th style="padding: 10px;">포트 범위</th>
                <th style="padding: 10px;">소스(허용 범위)</th>
                <th style="padding: 10px;">이유</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid var(--border-color);">
                <td style="padding: 10px; font-weight: 600;">SSH</td>
                <td style="padding: 10px;">22</td>
                <td style="padding: 10px;">내 IP 혹은 0.0.0.0/0</td>
                <td style="padding: 10px;">개발자가 원격 터미널 명령어를 입력하러 진입할 수 있게 하기 위해</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border-color);">
                <td style="padding: 10px; font-weight: 600;">HTTP</td>
                <td style="padding: 10px;">80</td>
                <td style="padding: 10px;">0.0.0.0/0 (모든 유저)</td>
                <td style="padding: 10px;">일반 방문객들이 웹 브라우저 주소창에 주소를 치고 들어오도록 하기 위해</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border-color);">
                <td style="padding: 10px; font-weight: 600;">HTTPS</td>
                <td style="padding: 10px;">443</td>
                <td style="padding: 10px;">0.0.0.0/0 (모든 유저)</td>
                <td style="padding: 10px;">보안 암호화 연결로 접속하도록 하기 위해</td>
              </tr>
            </tbody>
          </table>

          <div class="warning-box">
            <div class="warning-box-title">⚠️ 중요 규칙</div>
            <div class="warning-box-content">
              Spring Boot WAS 포트인 8080은 가급적 인바운드 보안그룹에서 외부에 직접 열어두지 말고 방화벽으로 차단해 두는 것이 보안상 매우 중요합니다. 대리 운전자인 Nginx(80/443 포트)만 외부에 열어 두고, Nginx가 내부망을 거쳐 8080으로 데이터를 토스하도록 가이드를 구성해야 합니다.
            </div>
          </div>
        `,
        practice: {
          prompt: "인터넷상의 모든 컴퓨터 주소를 뜻하는 표기법으로, 보안 그룹 설정 시 전 세계 모든 대중의 유입을 조건 없이 허용할 때 소스 IP 필드에 작성하는 주소 대역 규격을 CIDR 형태(넷마스크 값 포함)로 입력하세요.",
          expectedCommand: "0.0.0.0/0",
          commandHint: "모든 IP를 수용하는 값은 0.0.0.0 이며 CIDR 슬래시 뒤에 0을 붙집니다.",
          successMessage: "정답입니다! 0.0.0.0/0 규칙을 추가하면 누구나 내 웹 사이트에 도달할 수 있게 열립니다."
        },
        quiz: {
          question: "보안 그룹(Security Group) 규칙에 대한 이해 중 올바른 설명은 무엇입니까?",
          options: [
            "인바운드 규칙은 서버에서 외부 인터넷 서비스로 데이터를 요청해 나가는 방화벽 기준이다.",
            "아웃바운드 규칙은 외부 유저가 내 서버 컴퓨터 포트로 비집고 들어올 때 허용해 주는 통제 기준이다.",
            "SSH(22) 접속 규칙의 경우, 해킹 스캐너들의 대량 침투를 예방하기 위해 '내 IP'로 소스 범위를 한정해 두는 것이 권장된다.",
            "한 번 생성한 보안 그룹 규칙은 인스턴스 작동 중에는 절대 도중에 수정할 수 없다."
          ],
          correctIndex: 2,
          explanation: "SSH 22번 포트는 무차별 로그인 해킹 공격(Brute Force)이 가장 많이 발생하는 대역입니다. 따라서 인바운드 소스를 '내 IP'로 지정하여 자신의 컴퓨터에서만 접속을 허용하게 제한하는 것이 고도의 인프라 보안 표준입니다."
        }
      },
      {
        id: "1-4",
        title: "SSH 프로토콜 접속 및 윈도우/맥 실전 접속 실습",
        description: "로컬 컴퓨터의 터미널(Git Bash, cmd 등)을 켜서 원격 가상 컴퓨터 내부 콘솔에 진입합니다.",
        content: `
          <h3>1. SSH (Secure Shell) 통신의 기초</h3>
          <p>원격지에 있는 리눅스 컴퓨터의 모니터 화면을 보지 못하더라도, 인터넷망을 통해 텍스트 명령어를 주고받으며 시스템을 완전히 통제할 수 있게 해주는 안전한 프로토콜 통신 수단이 바로 <strong>SSH</strong>입니다. 내부 데이터는 강력하게 암호화되어 흐릅니다.</p>

          <h3>2. 로컬 컴퓨터 터미널 준비</h3>
          <ul>
            <li><strong>Windows</strong>: 기본 명령 프롬프트(cmd)나 PowerShell을 사용할 수 있지만, 리눅스 명령어 툴과 가장 흡사하게 동작하는 <strong>Git Bash</strong> 사용을 적극 권장합니다.</li>
            <li><strong>Mac</strong>: 기본 <code>터미널 (Terminal)</code> 앱을 켜면 됩니다.</li>
          </ul>

          <h3>3. 단계별 SSH 원격 접속 실전 절차</h3>
          
          <h4>Step 1. 다운로드받은 pem 키가 저장된 폴더로 이동</h4>
          <p>예를 들어 다운로드 폴더에 pem 파일이 있다면 로컬 터미널에서 <code>cd</code> 명령을 칩니다.</p>
          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">로컬 디렉토리 이동</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('cd ~/Downloads')">Copy</button>
            </div>
            <div class="code-body">
              <pre>cd ~/Downloads</pre>
            </div>
          </div>

          <h4>Step 2. pem 키 권한 보안 강화 (Mac / Linux 계열 필수)</h4>
          <p>리눅스는 키 파일이 누구나 읽을 수 있는 상태이면 로그인을 거부합니다. 아래 권한 축소 명령을 칩니다.</p>
          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">권한 수정</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('chmod 400 my-key.pem')">Copy</button>
            </div>
            <div class="code-body">
              <pre>chmod 400 my-key.pem</pre>
            </div>
          </div>

          <h4>Step 3. SSH 접속 커맨드 실행</h4>
          <p>AWS 인스턴스 상세 페이지에 적힌 <strong>퍼블릭 IPv4 주소</strong>를 확인하고 접속합니다.</p>
          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">접속 실행</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('ssh -i my-key.pem ubuntu@13.125.22.45')">Copy</button>
            </div>
            <div class="code-body">
              <pre>ssh -i my-key.pem ubuntu@[EC2의 퍼블릭 IP주소]</pre>
            </div>
          </div>
        `,
        practice: {
          prompt: "내 다운로드 폴더에 있는 키페어 이름이 'my-key.pem'이고, AWS EC2 인스턴스의 퍼블릭 IP 주소가 '54.180.120.9' 일 때, 터미널에 입력하여 서버에 접속하는 전체 SSH 접속 커맨드를 작성하세요.",
          expectedCommand: "ssh -i my-key.pem ubuntu@54.180.120.9",
          commandHint: "ssh -i my-key.pem ubuntu@ 뒤에 IP 주소를 명확히 대입하여 붙여 씁니다.",
          successMessage: "정답입니다! ssh 접속 파라미터 구조를 온전히 지키셨습니다."
        },
        quiz: {
          question: "SSH 접속 시 'WARNING: UNPROTECTED PRIVATE KEY FILE!' 에러 메시지가 출력되면서 로그인이 불가능하게 끊기는 현상의 이유는 무엇인가요?",
          options: [
            "AWS 서버 전원이 꺼져 있어서",
            "로컬 컴퓨터에 인터넷 연결이 아예 단절되어 있어서",
            "개인 키페어 파일(.pem)의 파일 읽기/쓰기 권한 범위가 너무 넓게 풀려 있어서",
            "도커 서비스가 충돌을 일으키고 있어서"
          ],
          correctIndex: 2,
          explanation: "리눅스 SSH 서비스 규정상, 접속 권한을 인증하는 .pem 프라이빗 키는 유출 방지를 위해 타인이 접근 불가하도록 소유자만 읽을 수 있는 잠금 권한(chmod 400) 상태일 때만 정상 승인합니다."
        }
      },
      {
        id: "1-5",
        title: "왕초보용 필수 리눅스 명령어 및 파일 편집 기술",
        description: "마우스가 없는 환경에서 폴더를 만들고 파일을 다듬기 위한 7대 명령어와 nano 기본 편집기 활용법을 익힙니다.",
        content: `
          <h3>1. 리눅스(Ubuntu) 콘솔과 친해지기</h3>
          <p>리눅스 환경은 마우스 클릭이나 파일 탐색기가 없습니다. 모든 동작은 텍스트 입력을 통해 실행됩니다. 아래 핵심 명령어를 수십 번 타이핑하여 외워봅시다.</p>

          <h4>필수 명령어 7가지</h4>
          <ol>
            <li><strong><code>pwd</code></strong> (Print Working Directory): 내가 지금 어떤 폴더 안에 들어와 있는지 전체 절대 경로로 화면에 띄워줍니다.</li>
            <li><strong><code>ls -al</code></strong>: 현재 폴더 안의 모든 파일과 하위 폴더 리스트를 한 줄씩 목록화하여 용량 및 권한 상태까지 요약 노출합니다.</li>
            <li><strong><code>cd [폴더경로]</code></strong>: 해당 폴더 안으로 문을 열고 들어갑니다. (<code>cd ..</code>은 이전 부모 폴더로 퇴각)</li>
            <li><strong><code>mkdir [폴더명]</code></strong>: 새로운 폴더를 생성합니다. (Make Directory)</li>
            <li><strong><code>rm -rf [파일명/폴더명]</code></strong>: 대상 리소스를 영구 강제 삭제합니다. (매우 강력하므로 오타에 극도로 유의해야 합니다!)</li>
            <li><strong><code>cat [파일명]</code></strong>: 텍스트 파일의 전체 문자열 내용물을 터미널 화면에 프린트합니다.</li>
            <li><strong><code>sudo [명령어]</code></strong>: 관리자(Root) 권한을 빌려 명령을 대행 실행시킵니다. 시스템 프로그램 설치 시엔 무조건 앞에 붙여야 합니다.</li>
          </ol>

          <h3>2. 나노(nano) 에디터로 파일 편집하기</h3>
          <p>Nginx 설정이나 배포 쉘 스크립트 파일을 작성할 때, 터미널 내부에서 가동되는 기본 텍스트 메모장 프로그램이 필요합니다. 가장 다루기 쉬운 <strong>nano</strong> 에디터를 씁니다.</p>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">nano 실행</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('nano deploy.sh')">Copy</button>
            </div>
            <div class="code-body">
              <pre>nano deploy.sh</pre>
            </div>
          </div>
          
          <div class="info-box">
            <div class="info-box-title">💾 nano 에디터 단축키 매뉴얼</div>
            <div class="info-box-content">
              <ul>
                <li><strong>내용 작성 및 이동</strong>: 방향키로 이동해 자유롭게 텍스트를 타이핑합니다.</li>
                <li><strong>저장하기</strong>: 키보드 <strong><code>Ctrl + O</code></strong> 누른 뒤 -> 하단에 파일명 확인 질문 뜨면 그냥 <strong><code>Enter</code></strong></li>
                <li><strong>종료 및 나가기</strong>: 키보드 <strong><code>Ctrl + X</code></strong> 누르면 터미널 콘솔 화면으로 돌아갑니다.</li>
              </ul>
            </div>
          </div>
        `,
        practice: {
          prompt: "현재 내가 서 있는 리눅스 폴더의 내부 경로 파일/디렉토리 목록을 숨김 파일 정보까지 포함하여 상세한 표 형식으로 확인하기 위해 입력하는 옵션 포함 명령어를 적어보세요.",
          expectedCommand: "ls -al",
          commandHint: "list의 약어인 ls에 a(all)와 l(long format) 옵션 플래그를 붙여 공백 한 칸 뒤에 작성합니다.",
          successMessage: "정답입니다! ls -al 명령어는 폴더 내용물을 스캔할 때 필수적인 도구입니다."
        },
        quiz: {
          question: "리눅스에서 전역 패키지 매니저인 APT 저장소의 최신 앱 릴리즈 버전 카탈로그 목록을 업데이트(동기화)하는 커맨드 세트는 무엇입니까?",
          options: [
            "mkdir update",
            "sudo apt update",
            "cat /etc/hosts",
            "ssh-keygen"
          ],
          correctIndex: 1,
          explanation: "sudo apt update 명령은 원격 리눅스 저장소에 있는 소프트웨어들의 최신 설치 목록을 동기화하여, 이후 apt install 시 오차 없는 최신 버전 설치를 가능케 해주는 선행 필수 커맨드입니다."
        }
      }
    ]
  },
  {
    id: "module-2",
    title: "2. 백엔드 스프링 부트(Spring Boot) 개발 및 빌드",
    sections: [
      {
        id: "2-1",
        title: "정적 웹 서버(WS)와 동적 WAS의 역할 분석",
        description: "웹 브라우저의 요구 리소스 특성에 맞춰 정적 서버와 동적 계산용 WAS가 분업하는 이유를 배웁니다.",
        content: `
          <h3>1. 정적 리소스(Static)와 동적 리소스(Dynamic)</h3>
          <p>사용자가 웹 사이트에 들어갔을 때 화면을 보여주는 코드는 크게 두 가지로 분류됩니다.</p>
          <ul>
            <li><strong>정적 리소스</strong>: 네이버 로고 이미지, 폰트 파일, 고정된 HTML/CSS/JS 파일. (누가 접속하든 항상 똑같은 리소스 제공)</li>
            <li><strong>동적 리소스</strong>: 사용자의 남은 잔액 조회, 실시간 검색어, 개인 결제 내역. (DB 상태나 비즈니스 로직에 따라 연산하여 매칭 반환)</li>
          </ul>

          <h3>2. WS와 WAS의 분업 메커니즘</h3>
          <p>Nginx는 정적 파일 처리에 최적화되어 동시 다중 접속을 초고속으로 소화합니다. 하지만 자바 코드를 읽어 로직을 복잡하게 연산하지는 못합니다. 반면 Tomcat(Spring Boot 내장 WAS)은 비즈니스 로직 계산에 전문적이지만, 단순 이미지 한 장을 넘겨줄 때도 시스템 리소스(스레드)를 점유하므로 낭비가 큽니다.</p>
          <p>따라서 앞단에 Nginx를 세우고 뒷단에 Spring Boot(8080)를 숨겨 분업을 수립하는 프록싱 구조가 백엔드 서버 설계의 정석입니다.</p>
        `,
        practice: {
          prompt: "자바 가동을 위해 리눅스 서버에 필수 설치해야 하는 Java Development Kit(JDK) 17버전의 패키지 설치용 Ubuntu apt 명령어를 적어보세요.",
          expectedCommand: "sudo apt install openjdk-17-jdk -y",
          commandHint: "openjdk-17-jdk를 설치하기 위해 관리자 권한(sudo)과 자동 승인 플래그(-y)를 포함해 작성하세요.",
          successMessage: "정답입니다! JDK 패키지가 준비되어야 자바 실행 엔진이 가동됩니다."
        },
        quiz: {
          question: "Nginx(WS)와 Tomcat(WAS)의 구성 협업에 대한 설명으로 올바르지 않은 것은 무엇입니까?",
          options: [
            "Nginx가 WAS 앞단에서 리버스 프록시 노선을 잡으면 외부 유저가 스프링 포트 8080에 무단 침투하는 보안 위협을 막을 수 있다.",
            "정적 파일은 가급적 Nginx 단에서 즉각 회수 반환하여 WAS 컴퓨터 메모리의 스레드 소모를 억제한다.",
            "WAS 서버 장비 장애 시 Nginx가 클라이언트 요청을 우회 처리하거나 임시 에러 랜딩 페이지를 출력하게 할 수 있다.",
            "Nginx를 두지 않고 Spring Boot WAS 단독으로 80포트를 직접 매핑하여 무중단 운영하는 것이 현업 서버 이중화의 표준 설계 원칙이다."
          ],
          correctIndex: 3,
          explanation: "스프링 부트 WAS 단독으로 80포트를 장악해 운영하면 신버전 재가동 시 프로세스 중단으로 인한 공백(다운타임)이 발생하므로 앞단에 Nginx를 두는 것이 무중단 인프라의 시작입니다."
        }
      },
      {
        id: "2-2",
        title: "IntelliJ IDEA 및 스프링 이니셜라이저 세팅",
        description: "로컬 PC에 실습 백엔드 API를 올리기 위한 스프링 부트 개발 도구 구성법을 알아봅니다.",
        content: `
          <h3>1. 스프링 이니셜라이저(Spring Initializr) 세팅</h3>
          <p>브라우저로 <strong><a href="https://start.spring.io" target="_blank">start.spring.io</a></strong>에 접속하여 템플릿을 생성합니다.</p>
          <ul>
            <li><strong>Project</strong>: Gradle - Groovy</li>
            <li><strong>Language</strong>: Java</li>
            <li><strong>Spring Boot Version</strong>: 3.x.x 대의 안정화 버전</li>
            <li><strong>Packaging</strong>: <strong>JAR</strong> (Tomcat 엔진을 내장 포함하여 배포하기 위해 반드시 선택)</li>
            <li><strong>Java</strong>: 17</li>
            <li><strong>Dependencies</strong>:
              <ul>
                <li><strong>Spring Web</strong>: 내장 톰캣 서버와 REST API 컨트롤러 엔진 제공</li>
                <li><strong>Lombok</strong>: 자바 코드 보일러플레이트(Getter/Setter) 자동 제거 모듈</li>
              </ul>
            </li>
          </ul>
        `,
        practice: {
          prompt: "스프링 이니셜라이저에서 웹 서버 개발을 위해 추가하게 되며, 내부적으로 내장 톰캣(Tomcat) 컨테이너 서버를 기본적으로 내장하여 동작시켜 주는 의존성 모듈의 이름을 작성해 보세요.",
          expectedCommand: "Spring Web",
          commandHint: "Spring 뒤에 한 칸 띄우고 W로 시작하는 단어입니다.",
          successMessage: "정답입니다! Spring Web 의존성이 핵심 구동 동력원입니다."
        },
        quiz: {
          question: "스프링 프로젝트 생성 시 Packaging 설정으로 'WAR' 대신 'JAR' 방식을 권장하여 채택하는 현실적 이유는 무엇인가요?",
          options: [
            "WAR는 자바 버전을 무조건 8버전 이하로 써야 해서",
            "JAR는 실행 환경에 외장형 WAS 인프라(별도의 톰캣 설치 등)를 갖출 필요 없이, 단독으로 자바 구동 명령어(java -jar)만으로 서버를 즉각 켜주기 때문에",
            "JAR 파일이 암호화 강도가 훨씬 강해서",
            "JAR는 빌드 시간이 전혀 들지 않아서"
          ],
          correctIndex: 1,
          explanation: "JAR 배포는 내장 톰캣 WAS를 포함하여 단일 패키징하므로 외장 WAS 세팅 없이도 JDK만 깔린 인스턴스에서 java -jar 명령으로 단번에 실행되어 아주 편리합니다."
        }
      },
      {
        id: "2-3",
        title: "실전 CRUD 및 헬스 체크용 컨트롤러 코딩",
        description: "실제 배포 점검에 활용될 REST API CRUD 컨트롤러 클래스를 작성하고 분석합니다.",
        content: `
          <h3>1. REST API 예제 클래스 코딩</h3>
          <p>프로젝트 내 <code>src/main/java/com/example/demo/ProductController.java</code> 파일을 생성하고 아래 코드를 온전히 복사 및 구현해 줍니다.</p>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">ProductController.java</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('package com.example.demo;\n\nimport org.springframework.web.bind.annotation.*;\nimport java.util.*;\n\n@RestController\n@RequestMapping(\&quot;/api/products\&quot;)\npublic class ProductController {\n    private final List<String> products = new ArrayList<>(List.of(\&quot;MacBook Pro\&quot;, \&quot;iPad Air\&quot;));\n\n    @GetMapping\n    public List<String> getProducts() {\n        return products;\n    }\n\n    @PostMapping\n    public String addProduct(@RequestParam String name) {\n        products.add(name);\n        return \&quot;Added: \&quot; + name;\n    }\n\n    @GetMapping(\&quot;/health\&quot;)\n    public String healthCheck() {\n        return \&quot;UP\&quot;;\n    }\n}')">Copy</button>
            </div>
            <div class="code-body">
              <pre><code>package com.example.demo;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    // 실습 테스트용 인메모리 리스트
    private final List&lt;String&gt; products = new ArrayList<>(List.of("MacBook Pro", "iPad Air"));

    @GetMapping
    public List&lt;String&gt; getProducts() {
        return products;
    }

    @PostMapping
    public String addProduct(@RequestParam String name) {
        products.add(name);
        return "Added: " + name;
    }

    // Nginx 및 CI/CD 무중단 검증용 API 엔드포인트
    @GetMapping("/health")
    public String healthCheck() {
        return "UP";
    }
}</code></pre>
            </div>
          </div>
        `,
        practice: {
          prompt: "백엔드 서버가 살아 움직이고 있는지 외부 배포 로봇이나 Nginx가 주기적으로 진단(Health Check)하기 위해, 정상 통신 시 문자열 'UP'을 리턴하도록 수립한 헬스체크 상대 경로 엔드포인트(/api/products/ 뒤의 경로)를 적어보세요.",
          expectedCommand: "health",
          commandHint: "컨트롤러 소스코드의 3번째 매핑 주소인 @GetMapping('/...') 부분을 참고하세요.",
          successMessage: "정답입니다! /health 엔드포인트를 호출하여 가동 상태를 감지할 것입니다."
        },
        quiz: {
          question: "Lombok 라이브러리의 어노테이션이나 클래스 필드 주입에 대한 설명 중 맞는 것은 무엇인가요?",
          options: [
            "@RestController를 붙이면 데이터 조회가 불가능해진다.",
            "List에 데이터를 추가하더라도 Spring Boot가 종료되고 재구동되면 메모리 상태가 포맷되어 원래 데이터 상태로 초기화된다.",
            "Lombok은 자바의 컴파일 속도를 낮추어 코드 품질을 훼손하는 보안 경고 지시어이다.",
            "위 코드의 POST 방식 추가 메서드는 외부에서 주소창 입력만으로 바로 테스트할 수 있다."
          ],
          correctIndex: 1,
          explanation: "인메모리 컬렉션은 JVM 작동 중 메모리 영역에만 생존하므로, 프로세스가 중지 및 재기동(Reboot)되면 데이터들이 소실 리셋됩니다."
        }
      },
      {
        id: "2-4",
        title: "Gradle을 이용한 소스 패키징(빌드) 및 테스팅 회피",
        description: "프로젝트를 컴파일하여 단일 독립 가동용 JAR 실행 파일을 패키징하고 옵션을 배웁니다.",
        content: `
          <h3>1. 빌드(Build) 및 gradlew 스크립트</h3>
          <p>로컬 PC에서 아래 빌드 명령어를 실행해 컴파일된 산출물인 <strong>JAR</strong> 파일로 압축 변환시킵니다.</p>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">Gradle 빌드 커맨드</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('./gradlew clean build -x test')">Copy</button>
            </div>
            <div class="code-body">
              <pre># Windows cmd/PowerShell
gradlew.bat clean build -x test

# Git Bash / Mac Terminal
./gradlew clean build -x test</pre>
            </div>
          </div>
          <p><code>-x test</code> 옵션 플래그는 JUnit 단위 테스트 코드들을 실행 점검하지 않고 바로 패키징 단계로 돌진하여 로컬 컴파일 속도를 극대화해 줍니다.</p>
        `,
        practice: {
          prompt: "Gradle로 빌드를 진행하기 전, 이전 빌드 결과 파일들을 깨끗하게 일소하여 클린한 상태에서 처음부터 다시 빌드하고 싶을 때 gradlew 뒤에 첫 번째 인자로 기입하는 명령어(소문자)를 쓰세요.",
          expectedCommand: "clean",
          commandHint: "청소한다는 의미의 영문 소문자 5글자 단어입니다.",
          successMessage: "정답입니다! clean은 빌드 파일 청소 정리 지시어입니다."
        },
        quiz: {
          question: "Gradle 빌드가 성공적으로 끝났을 때, 최종 배포를 위해 확보해야 할 실행 바이너리(.jar) 파일은 프로젝트 내부 어느 폴더 경로 하단에 저장되나요?",
          options: [
            "src/main/java/",
            "build/libs/",
            "src/main/resources/",
            ".gradle/"
          ],
          correctIndex: 1,
          explanation: "Gradle 빌드 결과물(JAR)은 프로젝트 루트 아래인 'build/libs/' 폴더에 자동 집약됩니다."
        }
      },
      {
        id: "2-5",
        title: "배포용 JAR 파일 단독 시동 및 로컬 점검",
        description: "IntelliJ 등 무거운 IDE 없이 터미널 단독 자바 실행(java -jar)으로 WAS 동작을 검증합니다.",
        content: `
          <h3>1. JAR 실행 및 톰캣 로그 확인</h3>
          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">JAR 실행</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('java -jar build/libs/demo-0.0.1-SNAPSHOT.jar')">Copy</button>
            </div>
            <div class="code-body">
              <pre>java -jar build/libs/demo-0.0.1-SNAPSHOT.jar</pre>
            </div>
          </div>
          <p>로그 맨 마지막에 <code>started on port(s): 8080</code>이 출력되면 잘 구동된 상태입니다. 터미널 새 창을 열고 아래 cURL 조회를 날려 정상 응답인지 체크합니다.</p>
          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">cURL 조회 테스트</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('curl http://localhost:8080/api/products')">Copy</button>
            </div>
            <div class="code-body">
              <pre>curl http://localhost:8080/api/products</pre>
            </div>
          </div>
        `,
        practice: {
          prompt: "컴파일이 완료된 JAR 아카이브 파일을 터미널 상에서 직접 적재하고 구동할 때, java 뒤에 인자로 전달하는 자바 실행 플래그 명령어(대시 기호 포함)를 기재해 보세요.",
          expectedCommand: "-jar",
          commandHint: "java -jar [파일명.jar] 형태의 문법 규격을 떠올려 보세요.",
          successMessage: "정답입니다! -jar 플래그로 톰캣 실행 프로세스를 직접 적재 구동시킵니다."
        },
        quiz: {
          question: "java -jar 명령어로 켜둔 스프링 부트 서버를 더 이상 안 쓰거나, 포트 반환을 위해 종료하고 싶을 때 키보드로 누르는 터미널 포그라운드 프로세스 종료 강제 단축키는 무엇인가요?",
          options: [
            "Ctrl + Z",
            "Ctrl + C",
            "Ctrl + A",
            "Alt + F4"
          ],
          correctIndex: 1,
          explanation: "터미널 실행 차단 인터럽트 명령 단축키는 만국 공통 'Ctrl + C' 입니다."
        }
      }
    ]
  },
  {
    id: "module-3",
    title: "3. Docker를 활용한 서버 컨테이너화 기초와 실전 (공식 문서 가이드 포함)",
    sections: [
      {
        id: "3-1",
        title: "Docker 아키텍처 및 핵심 개념 (Official Docs Reference)",
        description: "도커의 아키텍처 공식 문서 모델인 Client, Host(Daemon), Registry 관계를 이해합니다.",
        content: `
          <h3>1. Docker 공식 문서 기반 아키텍처 설계</h3>
          <p>도커 공식 가이드에 기술된 도커 엔진의 내부 원리를 파헤쳐 봅니다. 도커는 <strong>클라이언트-서버(Client-Server) 아키텍처</strong>를 활용해 동작합니다.</p>
          
          <div class="info-box">
            <div class="info-box-title">⚙️ 도커 핵심 3대 엔진 축</div>
            <div class="info-box-content">
              <ul>
                <li><strong>Docker Client (도커 클라이언트)</strong>: 개발자가 터미널에 <code>docker run</code>, <code>docker build</code> 명령어를 입력할 때 가동되는 CLI 클라이언트 툴입니다. 명령을 도커 데몬으로 포워딩해 전달합니다.</li>
                <li><strong>Docker Host & Daemon (도커 데몬 - dockerd)</strong>: 백그라운드에서 상시 상주하며 도커 API 요청을 감지 및 처리하고 컨테이너, 이미지, 볼륨, 네트워크 객체들을 실제 지배 생성하는 핵심 엔진(<code>dockerd</code>)입니다.</li>
                <li><strong>Docker Registry (도커 레지스트리)</strong>: 도커 이미지들을 보관 유통하는 저장소입니다. 기본값으로 <strong>Docker Hub</strong>가 호출되며, 필요시 사설 레지스트리를 쓸 수도 있습니다.</li>
              </ul>
            </div>
          </div>

          <h3>2. Docker Objects (도커 오브젝트)</h3>
          <ul>
            <li><strong>Image (이미지)</strong>: 컨테이너 생성 안내서가 박제된 읽기 전용 템플릿 파일입니다. 이미지 레이어는 Copy-on-Write(CoW) 기법의 파일 시스템을 통해 겹겹이 쌓여 저장 효율을 극대화합니다.</li>
            <li><strong>Container (컨테이너)</strong>: 이미지를 활성화하여 격리 주행을 펼치고 있는 실제 가상 프로세스 단위입니다.</li>
          </ul>
        `,
        practice: {
          prompt: "도커 가이드 아키텍처 상에서, 백그라운드에 상시 상주하며 이미지 생성 및 컨테이너 가동 등의 핵심 실무 연산을 직접 담당하는 도커 데몬 프로세스의 서비스 실행 파일명을 적어보세요.",
          expectedCommand: "dockerd",
          commandHint: "도커(docker) 이름 뒤에 데몬의 약자인 d를 붙여 소문자로 기입합니다.",
          successMessage: "정답입니다! dockerd 데몬 프로세스가 인프라 전체를 컨트롤합니다."
        },
        quiz: {
          question: "도커의 클라이언트-서버(Client-Server) 동작 구상에 대한 공식 설명 중 잘못 기술된 것은 무엇입니까?",
          options: [
            "도커 클라이언트(docker CLI)와 도커 데몬(dockerd)은 반드시 물리적으로 동일한 컴퓨터 안에서만 통신할 수 있으며 원격 제어는 아예 불가능하다.",
            "도커 데몬은 이미지 보관이나 가동 상태를 주도하고 가상 네트워크를 통제한다.",
            "도커 레지스트리(Docker Hub 등)는 push/pull 등의 전송 명령 대상으로 호출된다.",
            "컨테이너는 이미지의 인스턴스 실행 형태이다."
          ],
          correctIndex: 0,
          explanation: "도커 클라이언트와 도커 데몬은 REST API, Unix 소켓 혹은 네트워크 인터페이스를 거쳐 원격으로 연결 통신할 수 있어, 개발자 PC에 깔린 도커 CLI에서 AWS 상의 도커 데몬을 직접 원격 조율하는 것도 완벽히 지원됩니다."
        }
      },
      {
        id: "3-2",
        title: "Docker Ubuntu 공식 가이드 단계별 설치법",
        description: "공식 문서 규칙대로 충돌 요인을 청소하고 Ubuntu 22.04 LTS용 Docker Engine 패키지를 올립니다.",
        content: `
          <h3>1. 공식 문서 지정 구버전 청소 (Uninstall old versions)</h3>
          <p>도커 충돌 오작동을 예방하기 위해, 먼저 리눅스 서버에 임시 내포된 구버전 도커 관련 잔해들을 일소합니다.</p>
          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">구버전 패키지 지우기</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('sudo apt-get remove docker docker-engine docker.io containerd runc')">Copy</button>
            </div>
            <div class="code-body">
              <pre>sudo apt-get remove docker docker-engine docker.io containerd runc</pre>
            </div>
          </div>

          <h3>2. APT 공식 저장소 등록 세팅 (Set up the repository)</h3>
          <p>최신 Docker Engine 패키지를 안정적으로 내려받기 위해 도커 공식 인증 키와 패키지 저장소 소스를 로드합니다.</p>
          
          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">공식 GPG 보안키 및 레포 설정</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('sudo apt-get update\nsudo apt-get install -y ca-certificates curl gnupg\nsudo install -m 0755 -d /etc/apt/keyrings\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg\nsudo chmod a+r /etc/apt/keyrings/docker.gpg\n\necho \&quot;deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo \&quot;$VERSION_CODENAME\&quot;) stable\&quot; | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\nsudo apt-get update')">Copy</button>
            </div>
            <div class="code-body">
              <pre><code># GPG 키 수집용 기본 패키지 인스톨
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg

# GPG 보안 식별키 폴더 생성 및 보관 처리
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# 도커 다운로드 저장소 주소를 리눅스 패키지 소스 리스트에 등록
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update</code></pre>
            </div>
          </div>

          <h3>3. Docker Engine 최신본 설치</h3>
          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">엔진 설치</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin')">Copy</button>
            </div>
            <div class="code-body">
              <pre>sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin</pre>
            </div>
          </div>

          <h3>4. [초중요] sudo 없이 도커 명령어 쓰는 후속 설정 (Post-installation)</h3>
          <p>이 설정을 누락하면 매번 <code>docker</code> 명령을 칠 때마다 <code>sudo</code>를 붙여야 하고, <strong>CI/CD 배포 툴이 권한 불충분으로 배포에 실패</strong>합니다. 꼭 아래 명령어로 현재 로그인한 유저를 <code>docker</code> 그룹에 추가해 줍니다.</p>
          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">그룹 등록 및 즉시 반영</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('sudo usermod -aG docker $USER\nnewgrp docker')">Copy</button>
            </div>
            <div class="code-body">
              <pre>sudo usermod -aG docker \$USER
newgrp docker</pre>
            </div>
          </div>
        `,
        practice: {
          prompt: "현재 로그인 중인 원격 세션 유저를 sudo 기입 없이 도커 권한자로 실행하기 위해 그룹 매핑을 지정하는 환경 설정 리눅스 유저 추가 옵션 명령어 구문(sudo usermod ...의 핵심 부분)을 작성해 보세요.",
          expectedCommand: "sudo usermod -aG docker $USER",
          commandHint: "usermod 명령어에 추가 그룹 지칭 옵션(-aG) 및 타겟 그룹명(docker), 타겟 유저($USER)를 순서대로 공백 구분해 씁니다.",
          successMessage: "정답입니다! 이 설정을 해주어야 향후 Jenkins나 GitHub Actions가 패키징 배포 명령을 순탄히 에러 없이 밀어 넣을 수 있습니다."
        },
        quiz: {
          question: "도커 Ubuntu 공식 가이드라인 설치 도중, sudo usermod -aG docker $USER 명령어 주입 후 newgrp docker 명령어를 연달아 주입하는 실제 편의 이유는 무엇입니까?",
          options: [
            "도커 데이터를 클라우드로 자동 업로드하려고",
            "리눅스 시스템을 굳이 로그아웃 후 재부팅하지 않고도, 현재 쉘 터미널 세션에 도커 추가 권한 그룹 할당 사항을 강제 즉시 즉각 동적 갱신 적용시키기 위해",
            "S3 버킷을 삭제하려고",
            "스프링 부트를 롤백하려고"
          ],
          correctIndex: 1,
          explanation: "리눅스는 보통 유저가 속한 그룹 권한의 변경 사항이 들어오면 로그아웃 후 재로그인해야 반영합니다. 'newgrp docker' 명령은 원격 로그아웃 세션 단절 필요 없이 바로 쉘 환경 권한을 최신 상태로 새로고침해 줍니다."
        }
      },
      {
        id: "3-3",
        title: "도커 데이터 영구 보관: Volumes와 Bind Mounts",
        description: "컨테이너가 꺼져도 로그나 파일 데이터가 증발하지 않도록 호스트 PC에 묶어두는 영구 스토리지를 공부합니다.",
        content: `
          <h3>1. 도커 컨테이너 데이터의 태생적 한계: Ephemeral</h3>
          <p>도커 컨테이너는 실행 중에 생성된 파일이나 로그, 업로드된 이미지 데이터를 가상 디스크 레이어에 저장합니다. 하지만 <strong>컨테이너가 삭제(<code>docker rm</code>)되는 순간 이 모든 신규 데이터는 흔적도 없이 사라져 영구 유실(증발)</strong>됩니다. 이를 방지하기 위해 컨테이너 내부 가상 주소 폴더를 호스트 컴퓨터(진짜 내 가상 하드디스크) 폴더와 <strong>빨대 꽂아 동기화 연결</strong>해 두어야 합니다.</p>

          <h3>2. 두 가지 스토리지 바인딩 방식</h3>
          
          <h4>Volumes (도커 관리 볼륨 - 권장)</h4>
          <p>도커 데몬 시스템이 호스트 파일 디스크 내의 특정 격리 디렉토리(<code>/var/lib/docker/volumes/</code>)를 직접 생성하고 점유 관리하는 보관 영역입니다. 외부 사용자가 임의로 건드려 훼손할 위험이 적고 백업이 매우 안전하여 현업 데이터베이스 배포에 가장 권장됩니다.</p>
          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">볼륨 생성 및 컨테이너 바인딩</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('docker volume create db-data\ndocker run -d -p 3306:3306 -v db-data:/var/lib/mysql --name db mysql:8.0')">Copy</button>
            </div>
            <div class="code-body">
              <pre># 1. db-data 라는 이름의 도커 볼륨 생성
docker volume create db-data

# 2. -v [볼륨명]:[컨테이너내부경로] 형태로 실행
docker run -d -p 3306:3306 -v db-data:/var/lib/mysql --name db mysql:8.0</pre>
            </div>
          </div>

          <h4>Bind Mounts (디렉토리 바인드 마운트)</h4>
          <p>호스트 PC 내의 특정 임의 경로 폴더(예: <code>/home/ubuntu/logs</code>)를 컨테이너 내부 경로와 직접 직선 연결 동기화합니다. 설정 파일이나 소스 로그 추적이 필요할 때 자주 애용됩니다.</p>
          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">바인드 마운트 사용</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('docker run -d -p 8080:8080 -v /home/ubuntu/app/logs:/logs spring-app:latest')">Copy</button>
            </div>
            <div class="code-body">
              <pre># -v [호스트절대경로]:[컨테이너내부경로]
docker run -d -p 8080:8080 -v /home/ubuntu/app/logs:/logs spring-app:latest</pre>
            </div>
          </div>
        `,
        practice: {
          prompt: "호스트의 절대경로 '/data/logs' 디렉토리를 가동될 컨테이너 내부의 '/logs' 경로에 영구 빨대 꽂아 연동(바인드 마운트)하여 실행하고자 할 때, docker run 뒤에 덧붙이는 볼륨 옵션 문자열(-v 사용) 전체를 입력해 보세요.",
          expectedCommand: "-v /data/logs:/logs",
          commandHint: "-v [호스트경로]:[컨테이너경로] 형태로 공백 없이 작성하세요.",
          successMessage: "정답입니다! 이 매핑을 통해 컨테이너가 뻗어 삭제되어도 데이터 로그는 호스트 디바이스 디스크에 안전히 보존됩니다."
        },
        quiz: {
          question: "도커 스토리지 기법 중 볼륨(Volumes)과 바인드 마운트(Bind Mounts)에 대한 특징 설명으로 옳지 않은 것은 무엇인가요?",
          options: [
            "볼륨은 도커 엔진이 직접 관리하는 특정 내부 저장 공간으로 외부 충돌 요인에 격리 안전하다.",
            "바인드 마운트는 호스트 컴퓨터의 어떠한 물리적 디렉토리 주소도 지정 매핑이 가능하여 로그 확인에 유용하다.",
            "도커 컨테이너는 -v 설정 옵션 없이 구동해도 삭제 시 컨테이너 내부 파일 데이터가 아무 영향 없이 완벽 영구히 자동 보존된다.",
            "볼륨은 다른 여러 컨테이너들이 동시에 마운트하여 데이터를 공유 읽기/쓰기 처리할 수 있다."
          ],
          correctIndex: 2,
          explanation: "컨테이너 격리 파일 시스템은 휘발성 구조이므로, -v 또는 --mount 지정을 명시하지 않고 띄운 상태에서 컨테이너 삭제(rm)를 때리면 내부 가상 디스크 데이터는 영구 복구 불가능하게 삭제 증발합니다."
        }
      },
      {
        id: "3-4",
        title: "도커 네트워크(Docker Networking) 드라이버와 연동",
        description: "컨테이너 간의 가상 통신망을 개설하고 연동하는 네트워크 드라이버(bridge, host)들을 제어합니다.",
        content: `
          <h3>1. 도커 네트워크 드라이버 분류 (Official Docs)</h3>
          <p>도커 컨테이너는 가동 시 호스트 컴퓨터의 네트워크와 격리된 서브 가상 네트워크 카드를 할당받습니다. 목적에 따라 4대 드라이버를 골라 씁니다.</p>
          <ul>
            <li><strong><code>bridge</code> (브릿지 - 기본값)</strong>: 단일 호스트 장비 안에서 컨테이너들끼리 서로 전용 가상 스위치를 통해 안전하게 사설 통신을 주고받도록 개설되는 사설 네트워크망입니다.</li>
            <li><strong><code>host</code> (호스트)</strong>: 컨테이너의 가상 네트워크 격리를 아예 파괴하고, 호스트 컴퓨터의 네트워크 포트 카드를 그대로 100% 점유 노출하여 통신 성능을 극대화합니다. (컨테이너 내 8080 구동 시 호스트 컴퓨터의 8080에 바로 리스닝됨)</li>
            <li><strong><code>none</code></strong>: 모든 네트워크 인터페이스를 연결하지 않아 외부와의 통신을 원천 격리 금지 차단합니다.</li>
          </ul>

          <h3>2. 실무 브릿지 네트워크 활용</h3>
          <p>스프링 부트 컨테이너와 DB(MySQL) 컨테이너가 로컬 주소(127.0.0.1)나 가변 IP로 통신을 시도하면 연동에 뻑이 나기 쉽습니다. 아래 전용 가상선(Bridge)을 깔고 컨테이너 이름으로 서로를 지칭해 통신합니다.</p>
          
          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">네트워크 연결 구축</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('docker network create app-net\ndocker run -d --network app-net --name db-container mysql:8.0\ndocker run -d --network app-net -p 80:8080 --name was-container spring-app:latest')">Copy</button>
            </div>
            <div class="code-body">
              <pre># 1. app-net 이라는 이름의 가상 브릿지 네트워크망 생성
docker network create app-net

# 2. DB 컨테이너를 app-net망에 묶어 가동
docker run -d --network app-net --name db-container mysql:8.0

# 3. 스프링 백엔드도 동일한 app-net망에 묶어 구동
docker run -d --network app-net -p 80:8080 --name was-container spring-app:latest</pre>
            </div>
          </div>
          <p>이렇게 동일 브릿지 망에 가두어 연동하면, 스프링 설정 파일(application.properties)의 DB 연결 주소로 <code>jdbc:mysql://db-container:3306/db명</code> 과 같이 <strong>상대 컨테이너 별명으로 다이렉트 통신 호출</strong>이 성공적으로 이루어집니다.</p>
        `,
        practice: {
          prompt: "가상 컨테이너들끼리 안전한 통신이 가능하도록 Nginx 및 스프링 전용으로 수립하여 가두어 연동하는 가장 대표적이고 보편적인 디폴트 도커 네트워크 드라이버 명칭을 영어 소문자로 기재하세요.",
          expectedCommand: "bridge",
          commandHint: "다리라는 뜻의 영단어 6글자 소문자입니다.",
          successMessage: "정답입니다! bridge 네트워크 드라이버는 단일 노드 다중 컨테이너 연결 구조의 핵심입니다."
        },
        quiz: {
          question: "스프링 부트 컨테이너와 데이터베이스 컨테이너를 도커 내부에서 서로 유기적으로 연동시키고자 할 때 가장 이상적인 설계 조치는 무엇인가요?",
          options: [
            "두 컨테이너의 포트를 모두 외부에 통째 오픈하고 호스트 컴퓨터의 공인 IP로 뺑뺑이 통신을 맺게 한다.",
            "독자적인 bridge 타입 가상 네트워크를 개설하여 두 컨테이너를 동일 네트워크 선상에 묶어 가동하고, 서로 이름(이름이 DNS 별칭이 됨)을 목적지로 지칭해 사설 포트 다이렉트 통신을 맺는다.",
            "네트워크 드라이버를 none으로 처리해 통신을 잠근다.",
            "매번 배포할 때마다 가변 가상 IP 번호를 강제 하드코딩 수정한다."
          ],
          correctIndex: 1,
          explanation: "동일 브릿지 네트워크에 속한 컨테이너들은 외부 노출 노이즈 없이 내부 사설 망 포트(3306 등)로 컨테이너 이름 식별을 거쳐 매우 안전하고 빠른 고속 통신 맵을 개설할 수 있습니다."
        }
      },
      {
        id: "3-5",
        title: "보안과 이미지 경량화를 위한 Dockerfile 최적화 (Multi-stage)",
        description: "OWASP 보안 표준과 컨테이너 가상 머신의 빌드 용량을 10분의 1로 압축하는 실전 빌드 기법을 배웁니다.",
        content: `
          <h3>1. OWASP 컨테이너 보안 가이드</h3>
          <p>도커 파일 기본 템플릿으로 이미지를 구우면 컨테이너 내부 쉘은 기본적으로 최고 관리자 권한인 <strong><code>root</code> 권한</strong>으로 프로세스가 돌고 있습니다. 만약 스프링 앱에 RCE 취약점(Log4j 사태 등)이 발생해 털리면, 해커는 컨테이너 내부의 root 권한을 100% 획득하게 되어 서버에 막대한 피해를 줍니다. 
          따라서 실무에서는 컨테이너 내부 가동 유저를 임의의 <strong>비관리자(Non-root User)</strong>로 강제 한정하여 띄워야 합니다.</p>

          <h3>2. Multi-stage (멀티 스테이지) 빌드의 혁신</h3>
          <p>스프링 소스코드와 Gradle 빌드 캐시 등을 이미지에 다 싸서 들고 가면 이미지 1장에 800MB에 육박하는 용량 낭비가 생깁니다. 
          멀티 스테이지 빌드는 <strong>빌드를 하는 전용 스테이지(1단계)</strong>와 <strong>실행에 필수적인 완성 JAR 파일만 가져와 담아 돌리는 실행 스테이지(2단계)</strong>로 구분하여 최종 완성 이미지의 용량을 100MB 이하로 대거 줄여줍니다.</p>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">Dockerfile (실무 최적화 멀티스테이지 + Non-root 명세)</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('# 1단계. 빌드용 스테이지\nFROM gradle:7.6-jdk17 AS builder\nWORKDIR /build\nCOPY . .\nRUN ./gradlew build -x test\n\n# 2단계. 실행 전용 스테이지\nFROM openjdk:17-jdk-slim\nWORKDIR /app\n\n# 빌드 스테이지에서 컴파일 산출물만 추출하여 복사\nCOPY --from=builder /build/build/libs/*.jar app.jar\n\n# 보안을 위한 non-root 유저 추가 설정\nRUN groupadd -r springgroup && useradd -r -g springgroup springuser\nUSER springuser\n\nENTRYPOINT [\&quot;java\&quot;, \&quot;-jar\&quot;, \&quot;app.jar\&quot;]')">Copy</button>
            </div>
            <div class="code-body">
              <pre><code># ==========================================
# 1단계: 빌드 컴파일만 임시로 돌리는 공간 (builder)
# ==========================================
FROM gradle:7.6-jdk17 AS builder
WORKDIR /build
COPY . .
RUN ./gradlew build -x test

# ==========================================
# 2단계: 최종 배포되어 24시간 실행될 경량화 공간
# ==========================================
FROM openjdk:17-jdk-slim
WORKDIR /app

# builder 공간에서 이미 컴파일 조립 완료된 JAR 단 1장만 퍼옴!
COPY --from=builder /build/build/libs/*.jar app.jar

# 컨테이너 보안을 위한 Non-root 전용 가상 그룹 및 임의 유저 개설
RUN groupadd -r springgroup && useradd -r -g springgroup springuser
USER springuser # 이후 실행 프로세스는 springuser 권한으로 하향 구동!

ENTRYPOINT ["java", "-jar", "app.jar"]</code></pre>
            </div>
          </div>
        `,
        practice: {
          prompt: "멀티 스테이지 빌드 설계 단계 중, 2단계 실행 이미지 파일로 복사해 오기 위해 복사의 원천을 1단계 빌더 별칭으로 지목할 때 COPY 문법 뒤에 부여하는 옵션 지시 구문(--from=...)을 적으세요.",
          expectedCommand: "--from=builder",
          commandHint: "AS 뒤에 명명한 빌드 스테이지 명칭(builder)을 지정합니다.",
          successMessage: "정답입니다! --from=builder 옵션을 주어야 이미지 생성 용량이 축소 보장됩니다."
        },
        quiz: {
          question: "Dockerfile 빌드 시 멀티 스테이지(Multi-stage) 및 Non-root 사용자 설정을 적용함으로써 얻어지는 직접적인 프로덕션 운영 이득은 무엇입니까?",
          options: [
            "자바 빌드 라이선스 비용이 영구 면제된다.",
            "이미지 최종 용량이 획기적으로 경량화되어 배포 배송 시간이 줄어들고, 애플리케이션 보안 취약점 공격 피탈 시 root 권한의 유출 가능성을 원천 억제하여 침투 피해 범위를 컨테이너 수준으로 가두어 보호한다.",
            "리액트 소스코드가 자바 언어로 자동 변환된다.",
            "S3 버킷의 정적 웹호스팅 비용이 무료 처리된다."
          ],
          correctIndex: 1,
          explanation: "멀티 스테이지는 소스코드 찌꺼기를 걸러 용량을 줄이고, USER 지정을 통한 Non-root 격리는 만일의 침투 사태에 최고 관리자(root) 권한이 해커에게 넘어가 서버 호스트 컴퓨터까지 함락되는 것을 차단하는 최고 수준의 인프라 보안 조치입니다."
        }
      },
      {
        id: "3-6",
        title: "도커 CLI 치트 시트와 실무 진단 및 시스템 청소",
        description: "서버 디스크가 꽉 차지 않도록 도커 찌꺼기를 청소하고 실시간 자원을 진단합니다.",
        content: `
          <h3>1. 도커 컨테이너 및 이미지 리소스의 부작용: 디스크 고갈</h3>
          <p>도커를 지속적으로 배포하고 방치하면, 빌드할 때 찌꺼기로 남은 임시 이미지(<code>&lt;none&gt;</code> 으로 표시되는 댕글링 이미지)들과 죽어 있는 옛날 컨테이너 파일 조각들이 디스크를 야금야금 좀먹어 <strong>서버 디스크 공간 부족(No space left on device)</strong> 이라는 큰 인프라 장애를 일으킵니다.</p>

          <h3>2. 디스크 완전 청소 (Docker System Prune)</h3>
          <p>사용하지 않는 정지된 컨테이너, 네트워크 찌꺼기, 이름 없는 댕글링 이미지를 단번에 청소하는 청소기 커맨드입니다.</p>
          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">도커 전체 청소</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('docker system prune -a -f')">Copy</button>
            </div>
            <div class="code-body">
              <pre># 사용하지 않는 리소스 전체 강제 포맷 청소
docker system prune -a -f</pre>
            </div>
          </div>

          <h3>3. 실시간 컨테이너 모니터링 (Docker Stats)</h3>
          <p>스프링 컨테이너가 CPU나 메모리를 얼마나 먹으며 빌빌거리는지 성능 상태를 작업 관리자 뷰로 파악합니다.</p>
          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">도커 성능 현황 모니터링</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('docker stats')">Copy</button>
            </div>
            <div class="code-body">
              <pre>docker stats</pre>
            </div>
          </div>
          <p>이 명령을 실행하면 실시간 가동 중인 컨테이너들의 메모리 소비 비중(%)을 보여주어, 사양이 낮은 t2.micro 서버 메모리(1GB)가 과부하 걸렸는지 여부를 손쉽게 실시간 감시할 수 있습니다.</p>
        `,
        practice: {
          prompt: "도커에서 사용하지 않는 모든 정지된 컨테이너, 고립된 네트워크, 이름 없는 캐시 이미지를 영구 삭제하여 서버 하드디스크 용량을 청소 확보하는 도커 청소 명령어를 적으세요.",
          expectedCommand: "docker system prune",
          commandHint: "docker system 뒤에 가지치기(정리)를 뜻하는 prune 명령어를 씁니다.",
          successMessage: "정답입니다! docker system prune 명령은 서버 디스크 고갈 방지를 위해 정기 배치나 쉘 스크립트에 탑재되는 핵심 정리 커맨드입니다."
        },
        quiz: {
          question: "도커 구동 중인 AWS 가상 서버 컴퓨터의 디스크 용량이 꽉 차서 빌드 파이프라인 전체가 에러로 먹통이 되었을 때, 디스크를 복구하기 위한 긴급 조치로 올바르지 않은 것은 무엇인가요?",
          options: [
            "docker system prune 명령어를 실행해 사용하지 않는 댕글링 찌꺼기를 영구 삭제한다.",
            "docker ps -a로 사용하지 않는 구버전 종료 컨테이너들을 파악하여 docker rm 처리한다.",
            "용량 확보를 위해 Nginx 전역 폴더인 /etc/nginx 자체를 강제 삭제 처리해 버린다.",
            "실행 중인 로그 파일 중 과도하게 커진 /var/log/ 파일들의 크기를 확인하고 비운다."
          ],
          correctIndex: 2,
          explanation: "디스크가 차올랐다고 Nginx 전역 환경 설정 폴더(/etc/nginx)를 싹 지워버리면, 프록싱 인프라 자체가 깨져 유입 유저의 라우팅이 영구 정지되는 대형 사태로 확장됩니다."
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
        title: "1세대: 파일질라(FileZilla) SFTP 수동 배포와 다운타임",
        description: "전통적인 수동 JAR 업로드 배포 절차를 겪어보며, 다운타임의 근본적 문제점에 공감합니다.",
        content: `
          <h3>1. 수동 배포(Manual Deploy)란?</h3>
          <p>CI/CD 자동화 도구를 아직 도입하지 않았거나 소규모 가내수공업형 배포 시 진행하는 기초 흐름입니다.</p>

          <h3>2. 수동 SFTP 배포 수행 과정</h3>
          <ol>
            <li><strong>로컬 빌드</strong>: 내 윈도우 컴퓨터에서 <code>./gradlew clean build</code>를 돌려 <code>build/libs/demo.jar</code>를 획득합니다.</li>
            <li><strong>SFTP 접속</strong>: 파일 전송 프로그램인 <strong>FileZilla</strong>를 켜서 <code>[사이트 관리자]</code>에서 프로토콜은 <code>SFTP</code>, 호스트는 <code>EC2의 퍼블릭 IP</code>, 로그온 유형은 <code>키 파일</code>로 설정한 뒤 내 <code>.pem</code> 키를 로드하여 접속합니다.</li>
            <li><strong>파일 전송</strong>: <code>demo.jar</code> 파일을 서버의 <code>/home/ubuntu/</code> 경로로 직접 던져 전송합니다.</li>
            <li><strong>프로세스 세대 교체</strong>: 서버 터미널에 SSH로 로그인해서 구버전을 끄고 새 버전을 실행시킵니다.</li>
          </ol>

          <div class="warning-box">
            <div class="warning-box-title">❌ 수동 배포의 한계점: 뼈아픈 서비스 정지(Downtime)</div>
            <div class="warning-box-content">
              새로운 버전의 JAR를 적용하려면 기존 8080 포트를 장악하고 있는 구버전을 먼저 죽여야만(kill) 합니다. 그 순간 포트가 빌어 비게 되며, 새 버전의 스프링 부트가 완전히 메모리에 로드되어 <code>Tomcat started</code>를 띄울 때까지의 공백 시간(보통 15초~1분 이상) 동안 사용자가 사이트에 접속하면 <strong>502 Bad Gateway</strong> 혹은 접속 불능 에러 화면을 보게 됩니다. 이를 <strong>다운타임(Downtime)</strong>이라고 하며, 실서비스 중인 토이 프로젝트나 상용 서비스에서는 절대 허용되어서는 안 되는 치명적인 사용자 이탈 요인입니다.
            </div>
          </div>
        `,
        practice: {
          prompt: "서버 터미널에서 백그라운드로 작동하고 있는 자바 프로세스의 PID가 '3412'인 것을 발견했습니다. 새로운 배포를 위해 이 프로세스를 즉시 강제 종료시키는 리눅스 명령어를 적어보세요.",
          expectedCommand: "kill -9 3412",
          commandHint: "kill 명령어에 강제 종료 옵션(-9)을 붙이고 뒤에 PID 번호를 적어줍니다.",
          successMessage: "정답입니다! kill -9 [PID]는 리눅스에서 강제 킬을 내릴 때 공통적으로 사용하는 명령어입니다."
        },
        quiz: {
          question: "전통적인 파일질라 SFTP 수동 배포 방식을 장기 운영 관점에서 지양해야 하는 이유로 알맞지 않은 것은 무엇인가요?",
          options: [
            "새 버전으로 교체할 때마다 구버전을 끄고 신버전을 켤 때 다운타임이 불가피하게 발생한다.",
            "배포 시 매번 전송 및 명령 제어 작업을 개발자가 터미널에서 생노동 수작업으로 해야 하므로 인적 실수(오타 등) 가능성이 크다.",
            "FileZilla 프로그램을 다운로드하면 무조건 유료 라이선스 위반 벌금이 청구되기 때문이다.",
            "빌드부터 배포 실행까지의 시간이 수동 동작 특성상 지체되어 빠른 피드백과 릴리즈가 불가능하다."
          ],
          correctIndex: 2,
          explanation: "FileZilla는 개인 및 상용 환경 모두에서 활용할 수 있는 무료 오픈소스 버전이 지원되므로 라이선스 요금 청구가 지양의 주원인은 아닙니다. 인프라의 인적 실수 유발과 서비스 다운타임의 근본적 태생 한계가 주원인입니다."
        }
      },
      {
        id: "4-2",
        title: "2세대: 가상 컨테이너 기반 도커 수동 배포 및 장점",
        description: "도커 이미지를 허브에 올려서 서버에서 손쉽게 컨테이너 단위로 교체 배포하는 진보된 구조를 살펴봅니다.",
        content: `
          <h3>1. 컨테이너 이미지 저장소의 도입</h3>
          <p>서버에 직접 빌드 결과물 JAR 파일을 FTP로 올리는 구조를 버리고, 빌드가 끝난 가동형 완성품 <strong>도커 이미지(Docker Image)</strong>를 이미지 은행인 <strong>Docker Hub (도커 허브)</strong>에 전송(Push)해 둔 뒤, 서버에서는 JAR 전송 없이 도커 이미지 명칭만으로 내려받아(Pull) 실행하는 구조를 만듭니다.</p>

          <h3>2. 도커 수동 교체 배포 절차</h3>
          <ol>
            <li><strong>로컬 빌드 및 도커화</strong>: 내 컴퓨터에서 <code>./gradlew clean build</code> 후 <code>docker build -t [내계정]/spring-app:latest .</code> 빌드를 칩니다.</li>
            <li><strong>도커 허브 업로드</strong>: 완성된 이미지를 저장소에 푸시합니다.
              <br/><code>docker push [내계정]/spring-app:latest</code>
            </li>
            <li><strong>서버 터미널 접속 및 다운로드</strong>: 서버로 SSH 진입하여 신규 이미지를 풀받습니다.
              <br/><code>docker pull [내계정]/spring-app:latest</code>
            </li>
            <li><strong>컨테이너 재부팅</strong>: 구버전 컨테이너를 중지 및 삭제하고 신버전으로 즉시 갈아치웁니다.
              <div class="code-container">
                <div class="code-header">
                  <span class="code-filename">도커 컨테이너 교체</span>
                  <button class="copy-btn" onClick="navigator.clipboard.writeText('docker stop was\ndocker rm was\ndocker run -d -p 80:8080 --name was [내계정]/spring-app:latest')">Copy</button>
                </div>
                <div class="code-body">
                  <pre>docker stop was
docker rm was
docker run -d -p 80:8080 --name was [내계정]/spring-app:latest</pre>
                </div>
              </div>
            </li>
          </ol>

          <h3>3. 도커 배포의 압도적인 장점</h3>
          <ul>
            <li><strong>서버 관리의 무결성</strong>: 서버에 자바 JDK가 깔려있든 말든, 도커만 깔려 있으면 배포가 됩니다. 서버에 덕지덕지 라이브러리를 깔아 서버 운영체제 가동을 훼손할 필요가 없습니다.</li>
            <li><strong>버전 롤백(Rollback)의 초고속화</strong>: 배포한 신버전에 크리티컬한 버그가 생기면 예전 구버전 이미지명(예: <code>spring-app:1.0</code>)으로 <code>docker run</code> 명령어 한 줄만 다시 쳐주면 단 1초 만에 배포 롤백 복구가 성사됩니다.</li>
          </ul>
        `,
        practice: {
          prompt: "원격 도커 이미지 저장소인 Docker Hub에 업로드된 최신 버전의 이미지 'myid/spring-app:latest'를 로컬/서버 컴퓨터 파일 시스템으로 동기화하여 다운로드받는 도커 명령을 써보세요.",
          expectedCommand: "docker pull myid/spring-app:latest",
          commandHint: "도커 이미지를 땡겨(다운로드)받는 명령어인 docker pull 뒤에 이미지 전체 경로를 적습니다.",
          successMessage: "정답입니다! docker pull 명령으로 내려받은 이미지는 캐싱 처리되어 서버에서 초고속 구동이 준비됩니다."
        },
        quiz: {
          question: "도커 컨테이너 기반 배포 기법이 수동 JAR 파일 전송 배포에 비해 서버 복구(롤백) 관점에서 제공하는 가장 직접적인 편의성은 무엇인가요?",
          options: [
            "롤백 시 새로운 자바 소스코드를 수동 코딩해 주므로 편하다.",
            "예전 작동 버전의 도커 이미지가 도커 허브나 서버 캐시에 그대로 보존되어 있으므로, 롤백 명령 단 한 줄로 구버전 즉각 원상 복구가 가능하다.",
            "서버 하드웨어 디스크 용량을 자동으로 늘려준다.",
            "스프링 부트를 롤백하려고"
          ],
          correctIndex: 1,
          explanation: "컨테이너 배포는 빌드 완료된 상태를 이미지 스냅샷으로 영구 소유합니다. 신버전에 치명적 오류가 나면 구버전 이미지 태그를 호출해 새로 띄우는 것만으로 서버의 전진/후진 복구가 실시간 완료됩니다."
        }
      }
    ]
  },
  {
    id: "module-5",
    title: "5. Nginx 설정과 리버스 프록시 및 로드 밸런싱",
    sections: [
      {
        id: "5-1",
        title: "Nginx의 동작 구조와 경량 고성능의 비밀",
        description: "이벤트 기반 비동기 아키텍처의 혁신을 통해 Nginx가 왜 대세 웹 서버가 되었는지 분석합니다.",
        content: `
          <h3>1. Nginx가 탄생한 배경: C10K 문제</h3>
          <p>과거에는 <strong>Apache Web Server(아파치)</strong>가 웹 서버 시장을 지배했습니다. 하지만 인터넷 인구가 폭발하며 \"한 번에 1만 명 이상의 동시 접속(C10K - Connection 10,000)\" 요청이 들어오자 아파치는 뻗어버렸습니다.</p>
          <p>아파치는 사용자 요청이 올 때마다 <strong>새로운 스레드나 프로세스</strong>를 생성해 할당했습니다. 동시 접속자가 늘어날수록 시스템 메모리가 꽉 차고, CPU는 컨텍스트 스위칭(Context Switching, 일 번갈아 하기) 연산 과부하로 아무 처리도 할 수 없는 상태가 되었습니다.</p>

          <div class="info-box">
            <div class="info-box-title">⚡ Nginx의 비밀: 이벤트 루프(Event Loop)</div>
            <div class="info-box-content">
              Nginx는 소수의 워커 프로세스만 띄워놓고, 들어오는 수많은 요청을 이벤트라는 신호 단위로 바인딩하여 큐에 쌓아둡니다.
              스레드를 새로 파지 않고 싱글 스레드가 이벤트 루프를 고속으로 돌며 신호를 빠르게 비동기 분배하기 때문에, 메모리가 거의 늘어나지 않으며 수만 명의 동시 사용자 요청도 지연 없이 가볍게 소화해 냅니다.
            </div>
          </div>
        `,
        practice: {
          prompt: "Nginx의 환경 설정이 문법적으로 어긋난 곳이 없는지 검증하는 터미널 점검 옵션 명령어를 입력해 보세요. (실제 reload나 restart 전에 수행하는 안심용 명령입니다.)",
          expectedCommand: "nginx -t",
          commandHint: "test의 약자인 -t 플래그를 nginx 명령어 뒤에 붙여 입력합니다.",
          successMessage: "정답입니다! nginx -t 명령은 설정 파일 구조에 오타가 없는지 실시간 확인해 줍니다."
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
          <h3>1. 리버스 프록시(Reverse Proxy)란?</h3>
          <p>사용자(클라이언트)가 웹 서버에 요청을 보낼 때, 웹 서버(Nginx)가 요청을 받아 내부 서버(WAS / Spring Boot)에 전달하고 그 응답을 대신 받아 사용자에게 리턴해 주는 대행 역할을 말합니다.</p>
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
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    }
}</code></pre>
            </div>
          </div>
        `,
        practice: {
          prompt: "수정한 nginx.conf 설정 파일을 서버 정지 없이 즉시 서비스에 반영(재로드)하기 위해 실행하는 Nginx CLI 시그널 명령어를 작성하세요.",
          expectedCommand: "sudo nginx -s reload",
          commandHint: "관리자 권한 sudo 뒤에 nginx의 시그널 송신 옵션(-s)과 reload 명령어를 기재합니다.",
          successMessage: "정답입니다! nginx -s reload 명령어는 구동 중인 연결들을 보전하면서 설정을 부드럽게 새로고침합니다."
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
          <h3>1. 로드 밸런싱(Load Balancing)이란?</h3>
          <p>방문자 수가 너무 많아 단 한 대의 Spring Boot WAS 서버 컴퓨터가 터질 것 같다면, 똑같은 가상 컴퓨터 WAS 2~3대를 나란히 옆에 배치할 수 있습니다. Nginx는 최전방에서 트래픽을 고르게 찢어 분배하는 교통경찰(Load Balancer)이 됩니다.</p>

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
          explanation: "IP Hash는 사용자의 소스 IP 정보를 기준으로 균등 분배 해시 연산을 하여 항상 특정한 대상 호스트 WAS에 고정 바인딩하므로 세션 유지를 위해 활용됩니다."
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
          <h3>1. S3 정적 호스팅</h3>
          <p>HTML, CSS, Javascript, 이미지 파일처럼 브라우저가 그냥 다운받아 읽는 정적 소스는 서버 컴퓨터 없이 S3 단독으로 웹 사이트 서비스를 호스팅할 수 있습니다.</p>
          <p>버킷 정책 JSON에서 외부 유입 읽기 권한 정책을 추가하여 누구나 사이트에 접속하게 만듭니다.</p>

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
      "Resource": "arn:aws:s3:::my-bucket-name/*"
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
          <h3>1. CloudFront CDN</h3>
          <p>CloudFront는 AWS가 자랑하는 <strong>글로벌 CDN(Content Delivery Network)</strong> 서비스입니다. 전 세계 수백 군데의 물리적 엣지 로케이션(Edge Location) 캐시 서버에 우리의 프론트엔드 정적 파일들을 캐싱하여, 유저와 가장 가까운 지점에서 빛의 속도로 전송해 줍니다.</p>
          <p>배포 완료 후 캐시 갱신을 위해 <strong>캐시 무효화(Invalidation)</strong>를 수행하여 <code>/*</code>을 갱신해 주어야 합니다.</p>
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
          <h3>1. Route 53 & ACM 아키텍처</h3>
          <p>구매한 도메인 명을 Route 53 호스팅 영역에 연결하고 네임서버(NS) 권한을 이관합니다.</p>
          <p>그 뒤, ACM(AWS Certificate Manager) 서비스에 진입해 버지니아 북부 리전으로 SSL 인증서를 DNS CNAME 소유 증명을 거쳐 발급받아 CloudFront에 연결 연동해 줍니다.</p>
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
    title: "7. 쉘 스크립트와 GitHub Actions를 활용한 무중단 배포(Blue-Green) 자동화",
    sections: [
      {
        id: "7-1",
        title: "Blue-Green 무중단 배포의 필요성 및 메커니즘",
        description: "포트 이중화 구조를 기반으로 사용자 요청 차단이 0초인 배포 시나리오를 완성합니다.",
        content: `
          <h3>1. Blue-Green 배포의 물리적 흐름</h3>
          <p>사용자 트래픽이 유입 중인 상태에서 무중단 패치 스위칭을 이끌어내는 핵심 시나리오입니다.</p>
          <ul>
            <li><strong>Blue 환경</strong>: 현재 실제 트래픽이 유입 중인 환경 (포트: <code>8081</code>)</li>
            <li><strong>Green 환경</strong>: 새 버전이 기동 완료되어 대기하는 유휴 환경 (포트: <code>8082</code>)</li>
          </ul>

          <h3>2. 트래픽 스위칭의 단계</h3>
          <ol>
            <li>사용자는 Nginx 대문(80 포트)으로 진입합니다. Nginx는 현재 <code>8081(Blue)</code>을 지목하고 있습니다.</li>
            <li>새 이미지를 풀받아 <code>8082(Green)</code> 포트에 신규 컨테이너를 가동합니다.</li>
            <li>Green이 완전히 켜질 때까지 헬스 체크 API를 날려 Polling 대기 루프를 돕니다.</li>
            <li>정상 200 응답이 오면 Nginx 연결 포트 타겟을 Green(8082)으로 스위칭 교체합니다.</li>
            <li>Nginx <strong>reload</strong>를 쳐서 0.001초 만에 트래픽을 넘기고, 예전 Blue 컨테이너는 삭제 정리합니다.</li>
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
        title: "배포 자동화 쉘 스크립트(deploy.sh) 구성",
        description: "리눅스 내에서 포트 판별, 헬스 체크, Nginx 릴레이 교환을 수행하는 쉘 프로그래밍 코드를 해독합니다.",
        content: `
          <h3>1. deploy.sh 자동화 스크립트</h3>
          <p>Nginx 설정을 통째로 덮어쓰다 구문 오류를 내는 참사를 예방하기 위해, 포트 주소를 <code>service-url.inc</code> 로 분리하여 덮어쓰고 <code>reload</code> 하는 정교한 스크립트 구조입니다.</p>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">deploy.sh (무중단 스위칭 쉘)</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('#!/bin/bash\n\n# 현재 돌고 있는 포트 조회\nCURRENT_PORT=$(curl -s http://localhost/profile)\nif [ \&quot;$CURRENT_PORT\&quot; = \&quot;8081\&quot; ]; then\n    TARGET_PORT=8082\n    OLD_PORT=8081\nelse\n    TARGET_PORT=8081\n    OLD_PORT=8082\nfi\n\n# 새 버전 띄우기\ndocker run -d -p $TARGET_PORT:8080 --name app-$TARGET_PORT spring-app:latest\n\n# 헬스체크 루프\nfor RETRY in {1..10}\ndo\n    UP=$(curl -s http://localhost:$TARGET_PORT/api/health)\n    if [ -n \&quot;$UP\&quot; ]; then\n        break\n    fi\n    sleep 3\ndone\n\n# Nginx 포워딩 스위칭\necho \&quot;set \\$service_url http://127.0.0.1:$TARGET_PORT;\&quot; | sudo tee /etc/nginx/conf.d/service-url.inc\nsudo nginx -s reload\n\n# 기존 구버전 자원 청소\ndocker stop app-$OLD_PORT\ndocker rm app-$OLD_PORT')">Copy</button>
            </div>
            <div class="code-body">
              <pre><code>#!/bin/bash

# 1. 현재 돌고 있는 포트 조회
CURRENT_PORT=$(curl -s http://localhost/profile)
if [ "$CURRENT_PORT" = "8081" ]; then
    TARGET_PORT=8082
    OLD_PORT=8081
else
    TARGET_PORT=8081
    OLD_PORT=8082
fi

# 2. 새 버전 띄우기
docker run -d -p $TARGET_PORT:8080 --name app-$TARGET_PORT spring-app:latest

# 3. 헬스체크 루프 (최대 30초 대기)
for RETRY in {1..10}
do
    UP=$(curl -s http://localhost:$TARGET_PORT/api/health)
    if [ -n "$UP" ]; then
        break
    fi
    sleep 3
done

# 4. Nginx 포워딩 스위칭 (inc 설정 조각 파일만 덮어씀)
echo "set \$service_url http://127.0.0.1:$TARGET_PORT;" | sudo tee /etc/nginx/conf.d/service-url.inc
sudo nginx -s reload

# 5. 기존 구버전 자원 청소
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
        title: "GitHub Actions 빌드 캐싱 속도 최적화 및 deploy.yml 명세",
        description: "의존성 라이브러리 캐싱 기법을 도입하여 빌드 속도를 단축하고 완성형 워크플로를 구축합니다.",
        content: `
          <h3>1. 빌드 캐싱(Caching)의 중요성</h3>
          <p>GitHub Actions 러너는 가상 컨테이너가 켜질 때마다 매번 생 자바 JDK 라이브러리들을 Maven/Gradle 레포지토리에서 새로 다운로드하느라 빌드가 기본 5분 이상 지연됩니다. 
          <code>actions/cache</code> 패키지를 yaml 파일에 장착하여 <code>~/.gradle/caches</code> 와 <code>~/.gradle/wrapper</code> 주소를 지정 캐싱해 두면, 두 번째 빌드부터는 기 다운로드 완료된 캐시 데이터를 로컬 로드하므로 <strong>빌드 컴파일 시간을 단 30초 내외로 10배 이상 고속 단축</strong>시킬 수 있습니다.</p>

          <h3>2. 최종 최적화된 deploy.yml 명세서</h3>
          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">.github/workflows/deploy.yml</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('name: Deploy Pipeline\n\non:\n  push:\n    branches: [ master ]\n\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    \n    steps:\n    - name: Checkout Code\n      uses: actions/checkout@v3\n\n    - name: Set up JDK 17\n      uses: actions/setup-java@v3\n      with:\n        java-version: 17\n        distribution: temurin\n\n    - name: Cache Gradle packages\n      uses: actions/cache@v3\n      with:\n        path: |\n          ~/.gradle/caches\n          ~/.gradle/wrapper\n        key: \${{ runner.os }}-gradle-\${{ hashFiles(\'**/*.gradle*\', \'**/gradle-wrapper.properties\') }}\n        restore-keys: |\n          \${{ runner.os }}-gradle-\n\n    - name: Build with Gradle\n      run: ./gradlew clean build -x test\n\n    - name: Log in to Docker Hub\n      uses: docker/login-action@v2\n      with:\n        username: \${{ secrets.DOCKER_USERNAME }}\n        password: \${{ secrets.DOCKER_PASSWORD }}\n\n    - name: Build and Push Docker Image\n      run: |\n        docker build -t \${{ secrets.DOCKER_USERNAME }}/spring-app:latest .\n        docker push \${{ secrets.DOCKER_USERNAME }}/spring-app:latest\n\n    - name: EC2 SSH Remote Command Execution\n      uses: appleboy/ssh-action@master\n      with:\n        host: \${{ secrets.EC2_HOST }}\n        username: ubuntu\n        key: \${{ secrets.EC2_KEY }}\n        script: |\n          docker pull \${{ secrets.DOCKER_USERNAME }}/spring-app:latest\n          ./deploy.sh')">Copy</button>
            </div>
            <div class="code-body">
              <pre><code>name: Deploy Pipeline

on:
  push:
    branches: [ master ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout Code
      uses: actions/checkout@v3

    - name: Set up JDK 17
      uses: actions/setup-java@v3
      with:
        java-version: '17'
        distribution: 'temurin'

    # 빌드 속도 향상을 위한 핵심 Gradle 패키지 캐싱 설정
    - name: Cache Gradle packages
      uses: actions/cache@v3
      with:
        path: |
          ~/.gradle/caches
          ~/.gradle/wrapper
        key: \${{ runner.os }}-gradle-\${{ hashFiles('**/*.gradle*', '**/gradle-wrapper.properties') }}
        restore-keys: |
          \${{ runner.os }}-gradle-

    - name: Build with Gradle
      run: ./gradlew clean build -x test

    - name: Log in to Docker Hub
      uses: docker/login-action@v2
      with:
        username: \${{ secrets.DOCKER_USERNAME }}
        password: \${{ secrets.DOCKER_PASSWORD }}

    - name: Build and Push Docker Image
      run: |
        docker build -t \${{ secrets.DOCKER_USERNAME }}/spring-app:latest .
        docker push \${{ secrets.DOCKER_USERNAME }}/spring-app:latest

    - name: EC2 SSH Remote Command Execution
      uses: appleboy/ssh-action@master
      with:
        host: \${{ secrets.EC2_HOST }}
        username: ubuntu
        key: \${{ secrets.EC2_KEY }}
        script: |
          docker pull \${{ secrets.DOCKER_USERNAME }}/spring-app:latest
          sudo ./deploy.sh</code></pre>
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
          question: "GitHub Actions deploy.yml 명세 구문 내에 적힌 '\${{ secrets.EC2_KEY }}' 부분의 진짜 정체는 무엇입니까?",
          options: [
            "EC2 인스턴스의 패스워드 텍스트",
            "깃허브 프로젝트 설정의 Repository Secrets 메뉴에 암호화 보관 처리된 AWS EC2 원격 SSH 원격 접속용 프라이빗 키(.pem 파일의 전체 내용 문자열)",
            "도커 허브의 사용자 계정 ID",
            "가비아 도메인의 네임서버 목록"
          ],
          correctIndex: 1,
          explanation: "민감 정보 유출 방지를 위해, 깃허브 저장소 설정창에 EC2_KEY 라는 이름으로 pem 키 내부 텍스트를 기밀 저장해 두어야 소스 유출 공격 걱정 없이 깃허브 액션 러너가 암호키 인증 접속을 성사시킬 수 있습니다."
        }
      },
      {
        id: "7-4",
        title: "배포 상태 무중단 검증 루프 및 트러블슈팅 매뉴얼",
        description: "배포 다운타임이 없는지 실제로 cURL 루프로 감시하고, 502/Connection Refused 에러 대응법을 익힙니다.",
        content: `
          <h3>1. 무중단 검증 루프 cURL</h3>
          <p>배포 중단 상태가 정말 0초인지 보증하기 위해, 로컬 터미널을 켜고 배포가 진행되는 동안 1초에 한 번씩 웹 페이지 헬스 주소에 호출을 날립니다.</p>
          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">cURL 루프 점검</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('while true; do curl -s --connect-timeout 2 http://mysite.store/api/products/health; echo \&quot;\&quot;; sleep 1; done')">Copy</button>
            </div>
            <div class="code-body">
              <pre>while true; do curl -s --connect-timeout 2 http://[본인도메인]/api/products/health; echo ""; sleep 1; done</pre>
            </div>
          </div>
          <p>신버전 스위칭이 교차 완료되는 시기 동안에도 출력값에 <code>502 Bad Gateway</code> 같은 커넥션 빵꾸 에러 코드 없이 안정적으로 <code>UP</code>을 리턴하는 것을 보면 배포 성립 완료입니다.</p>

          <h3>2. 트러블슈팅 대응표</h3>
          <ul>
            <li><strong>502 Bad Gateway</strong>: Nginx 프록싱 타겟 WAS(스프링) 프로세스가 깨져 작동 불능인 상태입니다. <code>docker ps -a</code> 로 컨테이너 목록을 보고 <code>docker logs [컨테이너]</code> 로 스프링의 가동 실패 사유(application.yml 오타, DB 접속 암호 오류 등)를 해결해야 합니다.</li>
            <li><strong>Connection Refused</strong>: 포트 닫힘 상태입니다. AWS EC2의 보안 그룹 인바운드로 이동해 80/443 포트가 <code>0.0.0.0/0</code>(모든 IP)으로 등록 및 저장되어 있는지 확인합니다.</li>
          </ul>
        `,
        practice: {
          prompt: "Nginx 리버스 프록시 연동 배포 시, 대문인 Nginx는 성공적으로 떴으나 뒷단의 스프링 부트 애플리케이션 서버가 작동 불능 상태이거나 꺼져 있을 때 브라우저 화면에 표출되는 표준 HTTP 에러 상태코드 번호(숫자 3자리)를 쓰세요.",
          expectedCommand: "502",
          commandHint: "Bad Gateway 오류 번호입니다.",
          successMessage: "정답입니다! 502 Bad Gateway 코드는 리버스 프록시 앞문과 뒷문 WAS 간의 네트워크 링크 단절 시 노출되는 대표 통신 상태 에러 번호입니다."
        },
        quiz: {
          question: "Nginx & Docker 기반 Blue-Green 무중단 배포 구축 완료 후 실제 서비스를 운영할 때 가장 핵심적인 관리적 모니터링 수칙은 무엇인가요?",
          options: [
            "매주 서버 장비를 포맷하고 처음부터 리눅스를 다시 깐다.",
            "새로 패치 배포가 일어날 때마다 curl 루프 등을 이용해 1초 주기로 실시간 헬스 응답 상태가 통과 및 스위칭되는지 감시하고, 배포 직후 logs로 예외 스택 트레이스 잔상을 확인한다.",
            "도커 허브의 사용자 계정을 주기적으로 탈퇴하고 재가입한다.",
            "S3 버킷의 정적 웹호스팅 정책 파일들을 매번 지운다."
          ],
          correctIndex: 1,
          explanation: "인프라 구축보다 중대한 것은 유지 보수 및 모니터링입니다. 배포 스크립트 실행 후 헬스 상태, 로그 흔적, cURL 응답 상태를 감시하여 예기치 못한 연결 유실을 즉시 인지하는 것이 필수적입니다."
        }
      }
    ]
  }
];
