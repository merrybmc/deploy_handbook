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
            <li>AWS 콘솔에 로그인한 뒤, 리전을 <strong>아시아 태평양(서울) - ap-northeast-2</strong>로 맞춥니다.</li>
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
            <div class="warning-box-title">⚠️ 초보자 실수 예방: 8080 포트를 외부에 열어야 하나요?</div>
            <div class="warning-box-content">
              Spring Boot가 8080포트에서 실행된다고 해서, 보안 그룹에 8080을 직접 외부에 열어두는 것은 위험합니다. 웹의 정석은 외부 유저는 오직 80/443(Nginx 웹 서버)으로만 들어오게 하고, 들어온 트래픽을 Nginx가 서버 내부에서 8080으로 토스하는 구조를 띱니다. 8080 포트는 외부 보안 방화벽으로 잠가 두는 것이 기본 원칙입니다.
            </div>
          </div>
        `,
        practice: {
          prompt: "인터넷상의 모든 컴퓨터 주소를 뜻하는 표기법으로, 보안 그룹 설정 시 전 세계 모든 대중의 유입을 조건 없이 허용할 때 소스 IP 필드에 작성하는 주소 대역 규격을 CIDR 형태(넷마스크 값 포함)로 입력하세요.",
          expectedCommand: "0.0.0.0/0",
          commandHint: "모든 IP를 수용하는 값은 0.0.0.0 이며 CIDR 슬래시 뒤에 0을 붙입니다.",
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

          <div class="info-box">
            <div class="info-box-title">💡 처음 접속 시 질문 대처법</div>
            <div class="info-box-content">
              처음 접속 시 <code>Are you sure you want to continue connecting (yes/no/[fingerprint])?</code> 라는 안내문이 뜹니다. 당황하지 마시고 알파벳 전체로 <strong><code>yes</code></strong>를 입력하고 Enter를 누르시면 됩니다. 정상 접속되면 프롬프트가 <code>ubuntu@ip-172-xx-xx-xx:~$</code> 로 교체됩니다.
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
        title: "왕초보용 필수 리눅스 명령어 및 vim/nano 에디터 활용법",
        description: "마우스가 없는 환경에서 폴더를 만들고 파일을 다듬기 위한 7대 명령어와 기본 편집기 활용법을 익힙니다.",
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
          prompt: "현재 내가 서 있는 리눅스 폴더의 내부 경로 파일/디렉토리 목록을 숨김 파일 정보까지 포함하여 아주 상세한 표 형식으로 확인하기 위해 입력하는 옵션 포함 명령어를 적어보세요.",
          expectedCommand: "ls -al",
          commandHint: "list의 약어인 ls에 a(all)와 l(long format) 옵션 플래그를 붙여 공백 한 칸 뒤에 작성합니다.",
          successMessage: "정답입니다! ls -al 명령어는 폴더 내용물을 꼼꼼히 스캔할 때 매분 쳐보게 되는 필수 명령입니다."
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
        title: "정적 웹 서버(WS)와 동적 WAS의 근본 차이",
        description: "웹 브라우저의 요구 리소스 특성에 맞춰 정적 서버와 동적 계산용 WAS가 분업하는 이유를 배웁니다.",
        content: `
          <h3>1. 정적 리소스(Static)와 동적 리소스(Dynamic)</h3>
          <p>사용자가 네이버 웹 사이트에 들어갔을 때 눈에 보이는 요소는 크게 두 갈래로 나뉩니다.</p>
          <ul>
            <li><strong>정적 리소스</strong>: 네이버 로고 이미지, 아이콘, 폰트 파일, 화면 뼈대를 구성하는 HTML/CSS 파일. (누가 언제 접속하든 완전히 동일한 형태를 지님)</li>
            <li><strong>동적 리소스</strong>: '홍길동 님 환영합니다' 라는 환영 인사, 사용자의 실시간 메일 목록, 장바구니 내역. (로그인한 대상, 데이터베이스의 변화 상태에 따라 매번 실시간으로 연산하여 다르게 포장해야 하는 결과물)</li>
          </ul>

          <h3>2. 분업 체계: Web Server와 WAS의 존재 이유</h3>
          <p>두 종류의 데이터를 한 프로그램이 혼자 다 처리하면 비효율적입니다. 그래서 두 개의 특화된 프로그램이 힘을 합칩니다.</p>
          
          <h4>Web Server (웹 서버 - Nginx)</h4>
          <p>정적 파일을 전문으로 돌려주는 경량 창고지기입니다. 파일 전달 성능이 우수하고 동시 수만 명의 대기를 가볍게 감당합니다. 하지만 소스코드를 읽고 조건문을 판단하거나 데이터베이스(DB)에서 정보를 꺼내 가공하는 고차원 복잡 연산은 할 수 없습니다.</p>
          
          <h4>WAS (Web Application Server - Tomcat / Spring Boot)</h4>
          <p>자바 소스코드를 직접 컴파일하고 해독하며, DB에 질의해 결과를 포장하는 <strong>동적 로직 해결사</strong>입니다. 연산 능력이 출중하지만 단순한 이미지 파일 1장을 리턴할 때도 내부 스레드(Thread)를 소비하므로, 정적 파일 처리에 자원을 쓰게 놔두면 중요한 결제나 로그인 로직 대기열이 밀려 터져버립니다.</p>

          <div class="info-box">
            <div class="info-box-title">💡 최적의 협업 모델</div>
            <div class="info-box-content">
              사용자가 웹 브라우저로 접근하면 <strong>Nginx</strong>가 대문을 열고 요청을 검사합니다.<br/>
              - <code>/images/logo.png</code> 같은 정적 리소스 요청: Nginx가 즉시 캐시 디스크에서 퍼올려 반환.<br/>
              - <code>/api/login</code> 같은 비즈니스 로직 요청: Nginx가 뒤쪽에 있는 <strong>스프링 부트(Tomcat - 8080포트)</strong>로 요청을 가볍게 넘겨서(Proxying) 연산을 마친 결과 JSON만 유저에게 대리 배달합니다.
            </div>
          </div>
        `,
        practice: {
          prompt: "자바로 작성된 프로그램 소스코드를 컴파일하고 연산하며 스프링 부트 내장 WAS 환경을 가동하기 위해, 리눅스 서버에 기본 설치되어야 하는 자바 컴파일 및 런타임 환경 도구(JDK) 17버전의 Ubuntu 설치 명령어를 입력해 보세요.",
          expectedCommand: "sudo apt install openjdk-17-jdk -y",
          commandHint: "sudo apt install openjdk-17-jdk에 묻지 않고 승인하는 옵션(-y)을 붙여 씁니다.",
          successMessage: "정답입니다! openjdk 패키지를 통해 리눅스 운영체제에 자바 실행 및 컴파일 인프라가 배치됩니다."
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
          explanation: "스프링 부트 WAS 단독으로 80포트를 장악해 운영하면 신버전 재가동 시 무조건 프로세스 중단으로 인한 공백(다운타임)이 발생하며, 분산 로드 밸런싱 세팅이 불가하므로 앞단에 Nginx와 같은 프록시 웹 서버를 연결하는 것이 서비스 무중단화의 기초 전제입니다."
        }
      },
      {
        id: "2-2",
        title: "IntelliJ IDEA 세팅 및 스프링 이니셜라이저 프로젝트 생성",
        description: "로컬 PC에 실습 백엔드 API를 올리기 위한 스프링 부트 개발 도구 구성법을 알아봅니다.",
        content: `
          <h3>1. 로컬 개발 환경용 JDK 설치</h3>
          <p>로컬 PC(Windows/Mac)에도 리눅스와 동일하게 Java 코드를 작성하고 돌려볼 수 있도록 <strong>JDK (Java Development Kit) 17</strong> 버전을 다운로드하여 설치해야 합니다. Oracle JDK나 무상 배포판인 Azul Zulu JDK 17 버전을 권장합니다.</p>

          <h3>2. 스프링 이니셜라이저(Spring Initializr)로 설계도 굽기</h3>
          <p>처음부터 스프링 폴더 구조를 직접 파는 것은 매우 비효율적입니다. 스프링 공식 이니셜라이저 페이지를 통해 맞춤 제작 템플릿을 생성합니다.</p>
          <ol>
            <li>웹 브라우저로 <strong><a href="https://start.spring.io" target="_blank">start.spring.io</a></strong>에 접속합니다.</li>
            <li><strong>Project</strong>: <code>Gradle - Groovy</code> 선택</li>
            <li><strong>Language</strong>: <code>Java</code> 선택</li>
            <li><strong>Spring Boot Version</strong>: 3.x.x 대의 안정화 등급(경로에 영문 글자 없는 순수 숫자) 선택</li>
            <li><strong>Project Metadata</strong>: Group(예: <code>com.example</code>), Artifact(예: <code>demo</code>) 입력</li>
            <li><strong>Packaging</strong>: <code>Jar</code> (반드시 Jar를 골라야 임베디드 톰캣 압축이 완료됩니다!)</li>
            <li><strong>Java Version</strong>: <code>17</code> 선택</li>
            <li><strong>Dependencies (의존성 추가)</strong> 오른쪽의 <code>ADD DEPENDENCIES</code> 버튼을 눌러 다음 2가지를 찾아서 꼭 추가합니다.
              <ul>
                <li><strong>Spring Web</strong>: 웹 통신 규격(MVC, REST API, Tomcat)을 만드는 핵심 엔진</li>
                <li><strong>Lombok</strong>: 자바 getter/setter 코딩 낭비를 방지해 주는 생산성 유틸리티</li>
              </ul>
            </li>
            <li>하단의 <strong>GENERATE</strong> 버튼을 누르면 프로젝트 파일이 압축된 <code>demo.zip</code> 파일이 받아집니다. 다운로드 폴더에서 압축을 푼 뒤 IntelliJ에서 Open 프로젝트로 가져옵니다.</li>
          </ol>
        `,
        practice: {
          prompt: "스프링 이니셜라이저에서 웹 서버 개발을 위해 추가하게 되며, 내부적으로 내장 톰캣(Tomcat) 컨테이너 서버를 기본적으로 내장하여 동작시켜 주는 의존성 모듈의 이름을 작성해 보세요.",
          expectedCommand: "Spring Web",
          commandHint: "Spring 뒤에 한 칸 띄우고 W로 시작하는 단어입니다.",
          successMessage: "정답입니다! Spring Web 의존성을 주입해야 포트 리스닝 및 HTTP 맵핑 컨트롤러 구현이 작동합니다."
        },
        quiz: {
          question: "스프링 프로젝트 생성 시 Packaging 설정으로 'WAR' 대신 'JAR' 방식을 권장하여 채택하는 현실적 이유는 무엇인가요?",
          options: [
            "WAR는 자바 버전을 무조건 8버전 이하로 써야 해서",
            "JAR는 실행 환경에 외장형 WAS 인프라(별도의 톰캣 설치 등)를 갖출 필요 없이, 단독으로 자바 구동 명령어(java -jar)만으로 서버를 즉각 켤 수 있어서",
            "JAR 파일이 암호화 강도가 훨씬 강해서",
            "JAR는 빌드 시간이 전혀 들지 않아서"
          ],
          correctIndex: 1,
          explanation: "과거 WAR 패키징 방식은 서버 장비에 Tomcat 엔진을 따로 구성하고 거기에 압축을 풀어 올리는 복잡한 방식이었으나, 최신의 JAR 배포는 WAS 엔진을 스스로 내포(Embedded)하고 있으므로 JDK만 깔려 있으면 아무 컴퓨터에서나 독립 즉시 주행이 가능하여 마이크로서비스 및 도커 배포의 표준이 되었습니다."
        }
      },
      {
        id: "2-3",
        title: "실제 실행 및 작동 가능한 REST API 소스코드 작성",
        description: "서버가 잘 살아서 데이터를 조율하는지 테스트할 수 있는 REST API 컨트롤러 코드를 개발합니다.",
        content: `
          <h3>1. REST API의 CRUD 구조</h3>
          <p>우리가 배포할 스프링 웹 서버는 데이터베이스 혹은 자바 메모리에 저장된 정보를 외부 클라이언트에게 JSON 규격으로 반환해 주는 백엔드 창구 역할을 합니다.</p>

          <h3>2. REST API 실전 예제 클래스 생성</h3>
          <p>IntelliJ의 <code>src/main/java/com/example/demo/</code> 디렉토리에 <code>ProductController.java</code> 파일을 생성하고 아래 소스 코드를 온전하게 똑같이 타이핑하거나 복사해 넣습니다.</p>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">src/main/java/com/example/demo/ProductController.java</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('package com.example.demo;\n\nimport org.springframework.web.bind.annotation.*;\nimport java.util.*;\n\n@RestController\n@RequestMapping(\&quot;/api/products\&quot;)\npublic class ProductController {\n    private final List<String> products = new ArrayList<>(List.of(\&quot;MacBook Pro\&quot;, \&quot;iPad Air\&quot;, \&quot;iPhone 15\&quot;));\n\n    @GetMapping\n    public List<String> getProducts() {\n        return products;\n    }\n\n    @PostMapping\n    public String addProduct(@RequestParam String name) {\n        products.add(name);\n        return \&quot;Successfully added product: \&quot; + name;\n    }\n\n    @GetMapping(\&quot;/health\&quot;)\n    public String healthCheck() {\n        return \&quot;UP\&quot;;\n    }\n}')">Copy</button>
            </div>
            <div class="code-body">
              <pre><code>package com.example.demo;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    // 실습 테스트를 위한 인메모리 임시 DB 컬렉션
    private final List&lt;String&gt; products = new ArrayList<>(List.of("MacBook Pro", "iPad Air", "iPhone 15"));

    // 1. GET http://localhost:8080/api/products -> 상품 리스트 조회
    @GetMapping
    public List&lt;String&gt; getProducts() {
        return products;
    }

    // 2. POST http://localhost:8080/api/products?name=샤오미 -> 상품 데이터 등록
    @PostMapping
    public String addProduct(@RequestParam String name) {
        products.add(name);
        return "Successfully added product: " + name;
    }

    // 3. GET http://localhost:8080/api/products/health -> 무중단 배포 시 상태 스위칭 감지용 헬스체크 주소
    @GetMapping("/health")
    public String healthCheck() {
        return "UP";
    }
}</code></pre>
            </div>
          </div>

          <h3>3. 어노테이션(Annotation)의 이해</h3>
          <ul>
            <li><code>@RestController</code>: 이 클래스가 데이터를 반환하는 REST API 서버의 통로임을 자바에 알립니다. 리턴값이 웹 페이지(HTML)가 아닌 데이터 자체(JSON 등)로 나갑니다.</li>
            <li><code>@GetMapping</code>: 브라우저가 조회를 원하는 GET 요청을 보낼 때 주소를 이어받아 메서드를 실행합니다.</li>
            <li><code>@RequestParam</code>: URL 파라미터 매개변수값(<code>?name=값</code>)을 추출하여 자바 변수로 받아냅니다.</li>
          </ul>
        `,
        practice: {
          prompt: "백엔드 서버가 살아 움직이고 있는지 외부 배포 로봇이나 Nginx가 주기적으로 진단(Health Check)하기 위해, 정상 통신 시 문자열 'UP'을 리턴하도록 수립한 헬스체크 상대 경로 엔드포인트(/api/products/ 뒤의 경로)를 적어보세요.",
          expectedCommand: "health",
          commandHint: "컨트롤러 소스코드의 3번째 매핑 주소인 @GetMapping('/...') 부분을 참고하세요.",
          successMessage: "정답입니다! /health 혹은 /actuator/health 주소는 실무에서 무중단 헬스 상태 점검을 체크하는 지정 관례 경로입니다."
        },
        quiz: {
          question: "Lombok 라이브러리의 어노테이션이나 클래스 필드 주입에 대한 설명 중 맞는 것은 무엇인가요?",
          options: [
            "@RestController를 붙이면 데이터 조회가 불가능해진다.",
            "List에 데이터를 추가하더라도 Spring Boot가 종료되고 재구동되면 메모리 상태가 포맷되어 원래 3개 데이터 상태로 초기화된다.",
            "Lombok은 자바의 컴파일 속도를 낮추어 코드 품질을 훼손하는 보안 경고 지시어이다.",
            "위 코드의 POST 방식 추가 메서드는 외부에서 주소창 입력만으로 바로 테스트할 수 있다."
          ],
          correctIndex: 1,
          explanation: "현재 데이터는 데이터베이스(RDB)에 물리 저장되지 않고 자바 런타임 메모리(List 객체)에 임시로 물려 있습니다. 따라서 서버를 재구동(Reboot)하면 메모리 적재 영역이 날아가고 다시 초기 설정 값으로 클린 리셋됩니다."
        }
      },
      {
        id: "2-4",
        title: "Gradle Wrapper 명령을 활용한 로컬 빌드 실습",
        description: "로컬 터미널에서 컴파일과 테스트를 돌려 단일 구동용 JAR 파일을 가공합니다.",
        content: `
          <h3>1. Gradle Wrapper (gradlew)가 무엇인가요?</h3>
          <p>자바 빌드 시 로컬 PC에 Gradle 빌드 엔진 프로그램이 직접 깔려 있지 않아도, 프로젝트 폴더 안에 이미 삽입되어 동봉된 빌드 기동 스크립트(<code>gradlew</code>)가 자동으로 빌드 파일을 땡겨와 빌드해 주는 아주 유용한 도구입니다.</p>

          <h3>2. 디렉토리 구조 이동과 빌드 커맨드 실행</h3>
          <p>로컬 PC 터미널(Git Bash 혹은 Mac Terminal)을 켜서 생성된 스프링 프로젝트 폴더의 루트 디렉토리(<code>build.gradle</code> 파일이 누워 있는 곳)로 이동합니다.</p>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">Gradle 빌드 커맨드</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('./gradlew clean build')">Copy</button>
            </div>
            <div class="code-body">
              <pre># Windows (일반 cmd 대역)
gradlew.bat clean build

# Mac / Linux / Git Bash 환경
./gradlew clean build</pre>
            </div>
          </div>

          <h3>3. 주요 빌드 옵션 해설</h3>
          <ul>
            <li><code>clean</code>: 이전 테스트 및 빌드로 <code>build/</code> 폴더 내부에 축적된 찌꺼기 파일과 컴파일 캐시를 완전히 포맷하여 깨끗하게 제거한 뒤 빌드를 재시작하도록 조율합니다.</li>
            <li><code>build</code>: 자바 소스코드를 스캔하고, 구문 에러를 체크한 뒤 컴파일(class) 작업을 거쳐 <code>src/test/java</code> 안의 단위 테스트 테스트를 모두 통과하면 최종 JAR를 조립합니다.</li>
            <li><strong><code>-x test</code> 옵션의 실용성</strong>: 테스트 코드를 다 구현하지 못했거나 빌드 속도를 번개처럼 높여야 할 때, 테스트 작동 단계를 강제로 생략(exclude)하고 빌드만 성사시키는 옵션입니다. (<code>./gradlew clean build -x test</code>)</li>
          </ul>
        `,
        practice: {
          prompt: "Gradle로 빌드를 진행하기 전, 이전 빌드 결과 파일들을 깨끗하게 일소하여 클린한 상태에서 처음부터 다시 빌드하고 싶을 때 gradlew 뒤에 첫 번째 인자로 기입하는 명령어(소문자)를 쓰세요.",
          expectedCommand: "clean",
          commandHint: "청소한다는 의미의 영문 소문자 5글자 단어입니다.",
          successMessage: "정답입니다! clean은 빌드 꼬임 에러 방지를 위해 빌드 전 매번 같이 실행하는 습관 명령어입니다."
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
          explanation: "성공적으로 종결된 Gradle 빌드 파일의 산출물은 언제나 프로젝트 루트 하단의 'build/libs/' 디렉토리에 '[프로젝트명]-[버전].jar' 명명 규칙으로 저장 및 배치됩니다."
        }
      },
      {
        id: "2-5",
        title: "배포 파일(.jar)의 로컬 독립 가동 및 응답 테스트",
        description: "서버로 전송하기 전에 로컬 환경에서 완성된 JAR 단독 실행을 확인하고 검증합니다.",
        content: `
          <h3>1. 빌드 완료된 JAR의 로컬 독자 실행</h3>
          <p>IntelliJ를 켜서 RUN 버튼을 누르는 대신, 터미널에서 오직 빌드 결과물인 JAR 실행 파일과 Java 엔진만을 사용해 스프링 부트 서버를 수동으로 켭니다.</p>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">JAR 실행 명령어</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('java -jar build/libs/demo-0.0.1-SNAPSHOT.jar')">Copy</button>
            </div>
            <div class="code-body">
              <pre>java -jar build/libs/demo-0.0.1-SNAPSHOT.jar</pre>
            </div>
          </div>
          <p>명령어를 실행하면 IntelliJ 콘솔에서 보던 익숙한 나뭇잎 로고와 함께 스프링 로드가 수행되며 <code>Tomcat started on port 8080 (http)</code> 안내가 출력됩니다.</p>

          <h3>2. API 응답 테스트 (cURL 및 브라우저 활용)</h3>
          <p>서버가 실행 중인 상태를 유지한 채, 새로운 터미널 창을 하나 더 열거나 웹 브라우저를 켜서 API의 실제 데이터 반환을 검사합니다.</p>
          
          <h4>cURL 명령어 방식 (개발자용)</h4>
          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">조회 및 추가 API 호출</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('curl http://localhost:8080/api/products')">Copy</button>
            </div>
            <div class="code-body">
              <pre># 1. 상품 목록 조회 테스트
curl http://localhost:8080/api/products

# 2. 신규 상품 등록 테스트 (POST)
curl -X POST "http://localhost:8080/api/products?name=AppleWatch"</pre>
            </div>
          </div>
          
          <p>호출 시 <code>["MacBook Pro","iPad Air","iPhone 15"]</code> 같은 깔끔한 브라우저 화면이나 터미널 결과가 보인다면 배포할 스프링 준비가 로컬 수준에서 완벽하게 끝난 것입니다.</p>
        `,
        practice: {
          prompt: "컴파일이 완료된 JAR 아카이브 파일을 터미널 상에서 직접 적재하고 구동할 때, java 뒤에 인자로 전달하는 자바 실행 플래그 명령어(대시 기호 포함)를 기재해 보세요.",
          expectedCommand: "-jar",
          commandHint: "java -jar [파일명.jar] 형태의 문법 규격을 떠올려 보세요.",
          successMessage: "정답입니다! java -jar 명령어 뒤에 아카이브 경로를 입력하여 스프링 부트를 기동시킵니다."
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
          explanation: "리눅스 및 윈도우 CLI 환경에서 실행 중인 현재 프로세스를 완전히 강제 제동하고 인터럽트를 먹여 터미널로 돌아오기 위해 누르는 가장 보편적인 단축 키는 'Ctrl + C' 입니다."
        }
      }
    ]
  },
  {
    id: "module-3",
    title: "3. Docker를 활용한 서버 컨테이너화 기초와 실전",
    sections: [
      {
        id: "3-1",
        title: "가상 머신(Hypervisor)과 도커 컨테이너의 물리적 원리",
        description: "가상 컴퓨터 환경 격리 아키텍처의 혁신인 도커의 구동 메커니즘을 상세히 정복합니다.",
        content: `
          <h3>1. "그거 제 컴퓨터에서는 잘 됐는데요?"의 근본 원인</h3>
          <p>현업 개발에서 배포 실패 원인의 80%는 <strong>환경 세팅 차이</strong>입니다. 개발자가 로컬 PC(Windows)에서 쓰던 Java 버전, 파일 경로 구분자(<code>\\</code>), 환경 변수 이름, 설치된 라이브러리 등이 클라우드 Ubuntu 서버의 세팅과 어긋나면 빌드 에러가 납니다.</p>
          <p>도커(Docker)는 이 문제를 <strong>환경 자체를 하나로 통째 포장</strong>하여 해결했습니다.</p>

          <h3>2. 가상 머신(VM) vs Docker 컨테이너(Container)</h3>
          
          <div class="deep-dive">
            <div class="deep-dive-header">
              <span>🖥️ 가상 머신(VM)과 도커 컨테이너 아키텍처 원리 분석</span>
            </div>
            <div class="deep-dive-content">
              <ul>
                <li><strong>가상 머신 (VM)</strong>:
                  <ul>
                    <li>하드웨어 위에 하이퍼바이저(VMware, VirtualBox 등)를 올리고, 그 위에 매번 독립적인 가상 운영체제(Guest OS)를 올립니다.</li>
                    <li>무거운 OS가 통째로 적재되므로 켜지는 데 몇 분이 걸리고, 가상 컴퓨터를 3대만 띄워도 메모리가 금방 바닥납니다.</li>
                  </ul>
                </li>
                <li><strong>도커 컨테이너 (Docker)</strong>:
                  <ul>
                    <li>호스트 컴퓨터의 진짜 OS 커널(Kernel)을 그대로 빌려와서 사용합니다.</li>
                    <li>애플리케이션 구동에 필요한 파일과 최소한의 가상 파일 시스템 껍데기만 가볍게 가둬놓는 <strong>프로세스 단위 격리</strong> 방식을 취합니다.</li>
                    <li>메모리 소비가 극도로 적고, 켜지는 데 단 1초도 안 걸리며, 호스트 운영체제와 완벽하게 독립 격리됩니다.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        `,
        practice: {
          prompt: "호스트 OS 커널을 공유하고 필요한 프로세스 실행 환경만 격리화하여, 몇 초 이내의 기동과 가벼운 용량을 강점으로 삼는 컨테이너 가상화 표준 플랫폼의 이름을 입력하세요.",
          expectedCommand: "docker",
          commandHint: "d로 시작하는 소문자 6자리 단어입니다.",
          successMessage: "정답입니다! 도커(Docker)는 전 세계 서버 인프라 배포 표준 기술로 독보적 지위를 가집니다."
        },
        quiz: {
          question: "도커 컨테이너가 가상 머신(VM)에 비해 가볍고 빠른 로딩 성능을 보이는 물리적 이유는 무엇입니까?",
          options: [
            "서버 CPU 성능을 배로 오버클럭하여 펌핑하기 때문",
            "가상 머신처럼 내부에 무거운 독자적 게스트 OS 커널을 매번 구동하지 않고, 호스트 컴퓨터의 OS 커널을 그대로 빌려 프로세스 수준에서 가볍게 격리하기 때문",
            "도커 컨테이너 안에는 자바 소스코드가 존재하지 않아서",
            "아마존 웹 서비스 클라우드 장비에서만 작동하게끔 코드가 설계되어서"
          ],
          correctIndex: 1,
          explanation: "도커는 OS를 통째로 모방하여 메모리에 무겁게 띄우는 가상 머신과 달리, 호스트 컴퓨터 OS의 커널을 그대로 공유하여 사용하고 순수한 실행 바이너리 컨텍스트만 분리하므로 가볍고 빠릅니다."
        }
      },
      {
        id: "3-2",
        title: "Dockerfile 명령어 상세 튜토리얼 및 작성 규칙",
        description: "나만의 자바 가동 이미지를 설계하기 위해 Dockerfile에 적는 5대 핵심 지시어의 특징을 학습합니다.",
        content: `
          <h3>1. Dockerfile이란 무엇인가요?</h3>
          <p>도커 이미지를 굽기 위한 <strong>조리법(Recipe) 명세서</strong>입니다. 파일명을 확장자 없이 <code>Dockerfile</code>로 지정한 텍스트 파일로 생성합니다.</p>

          <h3>2. Spring Boot 구동용 Dockerfile 소스 해부</h3>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">Dockerfile</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('FROM openjdk:17-jdk-slim\nARG JAR_FILE=build/libs/*.jar\nCOPY \${JAR_FILE} app.jar\nENTRYPOINT [\&quot;java\&quot;, \&quot;-jar\&quot;, \&quot;/app.jar\&quot;]\nEXPOSE 8080')">Copy</button>
            </div>
            <div class="code-body">
              <pre><code># 1단계. 컨테이너 베이스가 될 Java 런타임 이미지 지정
FROM openjdk:17-jdk-slim

# 2단계. 내 컴퓨터(호스트)의 빌드된 JAR 위치를 변수로 선언
ARG JAR_FILE=build/libs/*.jar

# 3단계. JAR 파일을 컨테이너 이미지 내부 파일 시스템의 루트(/) 경로에 복사
COPY \${JAR_FILE} app.jar

# 4단계. 컨테이너가 부팅(Start)될 때 최초 실행할 터미널 커맨드 명시
ENTRYPOINT ["java", "-jar", "/app.jar"]

# 5단계. 컨테이너가 사용할 포트 번호 명시 (설명 문서용)
EXPOSE 8080</code></pre>
            </div>
          </div>

          <h3>3. 핵심 지시어 5개 정복</h3>
          <ul>
            <li><strong><code>FROM</code></strong>: 베이스가 될 도커 허브 공식 이미지를 지정합니다. 무거운 리눅스를 고르면 이미지 용량이 수 GB에 육박하므로 경량화 버전인 <code>-slim</code>이나 <code>-alpine</code> 버전 이미지를 쓰는 것이 정석입니다.</li>
            <li><strong><code>ARG</code></strong>: Dockerfile 빌드 중(Build-time)에 일시적으로 쓸 변수를 선언합니다.</li>
            <li><strong><code>COPY</code></strong>: 내 로컬 디렉토리 내의 산출물을 이미지 안의 내부 파일 디스크로 안전하게 붙여넣습니다.</li>
            <li><strong><code>ENTRYPOINT</code></strong>: 컨테이너 실행 시 쉘 형태로 수행할 명령어 목록을 대괄호와 따옴표 배열 양식(<code>["명령어1", "인자1"]</code>)으로 설정합니다.</li>
            <li><strong><code>EXPOSE</code></strong>: 이 컨테이너가 8080포트를 외부에 개방하여 응대할 예정임을 기록하는 일종의 안내판 역할을 합니다.</li>
          </ul>
        `,
        practice: {
          prompt: "도커 설계 명세서(Dockerfile) 내부에서, 이미지 빌드를 위해 시작 기점이 될 베이스 공식 이미지를 명시하는 맨 첫 줄에 선언하는 영문 대문자 지시어를 입력해 보세요.",
          expectedCommand: "FROM",
          commandHint: "영어 '~로부터'에 해당하는 4글자 대문자 명령어입니다.",
          successMessage: "정답입니다! FROM 지시어를 선언하고 그 옆에 베이스가 될 이미지명(openjdk:17-jdk-slim)을 적어 빌드를 진행합니다."
        },
        quiz: {
          question: "Dockerfile을 이용한 이미지 설계 과정에 대한 설명 중 잘못 기술된 것은 무엇인가요?",
          options: [
            "Dockerfile은 소스코드 루트 디렉토리에 누워 있어야 빌드 컨텍스트를 읽기 수월하다.",
            "FROM openjdk:17-jdk-slim 에서 -slim 키워드는 디스크 불필요 도구를 제거한 초경량화 이미지임을 알린다.",
            "COPY 지시어를 통해 복사된 JAR 파일은 컨테이너가 종료되면 아예 파일 자체가 소멸되므로 매번 재빌드 시 소스코드를 새로 적어야 한다.",
            "ENTRYPOINT 지시어는 컨테이너 시작 즉시 켜질 자바 가동 문장(java -jar)을 지정할 때 적격이다."
          ],
          correctIndex: 2,
          explanation: "Dockerfile을 구워서 완성된 '이미지(Image)'는 읽기 전용(Read-Only)의 박제된 템플릿 파일이므로, 컨테이너가 백번 실행되고 꺼져도 그 내부의 COPY 파일 구조는 영구 불변하게 저장 보존됩니다."
        }
      },
      {
        id: "3-3",
        title: "도커 이미지 빌드와 로컬 태그 관리 실습",
        description: "명세서를 컴퓨터에 집어넣어 실행용 바이너리인 도커 이미지를 구워내는 법을 습득합니다.",
        content: `
          <h3>1. 도커 이미지(Image)란?</h3>
          <p>도커 이미지는 프로그램 실행에 필요한 소스코드, 라이브러리, 런타임 환경, 파일 시스템 구조를 단 하나로 밀봉 압축해 둔 <strong>읽기 전용 붕어빵 틀</strong>입니다. 이 틀을 기동시켜 실시간 연산을 소화하게 만든 실체가 <strong>컨테이너(Container)</strong>입니다.</p>

          <h3>2. 이미지 빌드 명령어 실전 가이드</h3>
          <p>스프링 프로젝트 루트에서 Dockerfile을 완성했다면 아래 명령을 실행합니다.</p>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">도커 이미지 빌드</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('docker build -t my-spring-app:1.0 .')">Copy</button>
            </div>
            <div class="code-body">
              <pre>docker build -t my-spring-app:1.0 .</pre>
            </div>
          </div>

          <h4>커맨드 옵션 상세 해설</h4>
          <ul>
            <li><strong><code>build</code></strong>: Dockerfile 내용을 분석해 이미지를 새로 제작하라고 지시합니다.</li>
            <li><strong><code>-t my-spring-app:1.0</code></strong>: 이미지의 이름(Tag)을 <code>이름:버전</code> 형태로 명명합니다. 버전을 적지 않으면 자동으로 <code>latest</code>가 붙습니다.</li>
            <li><strong><code>.</code> (마지막의 점)</strong>: <strong>빌드 컨텍스트(경로)</strong>를 현재 디렉토리로 잡는다는 핵심 옵션입니다. 이 점을 생략하면 Dockerfile이나 JAR 파일을 찾지 못해 빌드가 강제 에러 종료됩니다.</li>
          </ul>

          <div class="info-box">
            <div class="info-box-title">💾 빌드 완료 이미지 목록 조회</div>
            <div class="info-box-content">
              빌드가 끝나고 내 컴퓨터에 저장된 이미지 목록을 보려면 다음 명령어를 칩니다.<br/>
              <code>docker images</code>
            </div>
          </div>
        `,
        practice: {
          prompt: "현재 설치되어 있는 로컬 컴퓨터 내의 모든 도커 이미지 리스트 및 버전 정보를 화면에 테이블 목록화하여 보여주는 도커 CLI 명령어를 적어보세요.",
          expectedCommand: "docker images",
          commandHint: "도커의 이미지들 목록을 물어보는 복수형 단어 명령어입니다.",
          successMessage: "정답입니다! docker images 명령을 통해 용량과 이미지 ID(해시값)를 파악할 수 있습니다."
        },
        quiz: {
          question: "docker build -t my-spring-app:1.0 . 명령어 맨 끝에 기재하는 점(.)의 의미로 가장 옳게 서술된 것은 무엇인가요?",
          options: [
            "명령 문장이 끝났음을 컴퓨터에 알리는 온점 기호이다.",
            "현재 작업 위치의 디렉토리 파일들을 빌드 전송 대상으로 묶어 제공하라는 빌드 경로(Context) 지칭이다.",
            "도커 버전 1.0의 하위 호환성을 적용하라는 플래그이다.",
            "관리자 권한으로 강제 승인하라는 리눅스 표기법이다."
          ],
          correctIndex: 1,
          explanation: "도커 빌드 시 맨 마지막에 기입하는 점(.)은 매우 중요합니다. Docker CLI에 현재 경로(./) 상에 존재하는 Dockerfile을 읽고 해당 로컬 파일들을 빌드 컨텍스트에 포함해 도커 데몬으로 넘겨 처리하라는 상대 경로 포인터입니다."
        }
      },
      {
        id: "3-4",
        title: "도커 컨테이너 기동 및 포트 바인딩(-p 옵션)의 진실",
        description: "도커 격리 가상 환경의 포트와 호스트 컴퓨터 포트를 물리 연결하여 통신 통로를 뚫어봅니다.",
        content: `
          <h3>1. 도커 컨테이너 가동 명령어 상세 분석</h3>
          <p>구워낸 이미지를 활성화하여 백그라운드 서버로 구동해 봅시다.</p>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">도커 가동 명령어</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('docker run -d -p 80:8080 --name spring-server my-spring-app:1.0')">Copy</button>
            </div>
            <div class="code-body">
              <pre>docker run -d -p 80:8080 --name spring-server my-spring-app:1.0</pre>
            </div>
          </div>

          <h4>옵션의 중요 기능 명세</h4>
          <ul>
            <li><strong><code>run</code></strong>: 도커 이미지를 토대로 격리 프로세스인 컨테이너를 생성하여 시동을 겁니다.</li>
            <li><strong><code>-d</code> (detach)</strong>: 백그라운드 실행을 의미합니다. 이 플래그를 생략하면 자바 로그가 터미널 화면을 다 채우고 커서가 묶여버려서, 터미널 창을 끄면 컨테이너 서버도 같이 죽어버립니다.</li>
            <li><strong><code>--name spring-server</code></strong>: <code>3cf81a2b9d..</code> 같은 해시값 대신 알아보기 편하게 지정하는 별명입니다. 이후 끄거나 삭제 시 이 이름을 씁니다.</li>
          </ul>

          <h3>2. 포트 바인딩(Port Binding -p)의 메커니즘</h3>
          <p>도커 컨테이너는 호스트 컴퓨터(진짜 내 PC) 내부에서 철저하게 격리된 가상의 서브 운영체제처럼 작동하므로 고유한 가상 IP와 포트망을 따로 갖고 있습니다.</p>
          <p>따라서 외부 유저가 호스트 컴퓨터의 실제 포트로 접속을 보냈을 때, 도커 내부의 가상 포트로 연결을 통과시키는 다리를 놔야 합니다.</p>
          
          <div class="info-box">
            <div class="info-box-title">⚙️ -p 호스트포트:컨테이너포트 동작 구상</div>
            <div class="info-box-content">
              <code>-p 80:8080</code> 세팅의 경우:<br/>
              사용자가 브라우저로 <code>http://서버공인IP:80</code> (기본 80포트 접속)으로 진입 -> 호스트 운영체제가 이 신호를 낚아챔 -> 도커 컨테이너 안쪽의 <code>8080</code>번 포트로 포워딩해 전달함.
            </div>
          </div>
        `,
        practice: {
          prompt: "도커 이미지 'app:latest'를 'was'라는 이름의 컨테이너로 백그라운드(-d) 실행하되, 호스트의 외부 80포트를 컨테이너의 내부 8080포트와 연결하는 완전한 docker run 문장을 적어보세요.",
          expectedCommand: "docker run -d -p 80:8080 --name was app:latest",
          commandHint: "-d, -p, --name 옵션 간에 띄어쓰기를 명확히 하여 한 줄로 기재합니다.",
          successMessage: "정답입니다! 이 옵션 매핑 설정을 통해 포트 개방 및 바인딩이 성사됩니다."
        },
        quiz: {
          question: "docker run -d -p 8080:8080 --name server app:latest 명령으로 띄운 서버에 외부 사용자가 브라우저 주소창에 포트 번호를 치지 않고 일반 도메인이나 IP만 입력했을 때(http://IP) 접속이 실패하는 이유는 무엇인가요?",
          options: [
            "스프링 부트 서버의 자바 버전이 낮아서",
            "브라우저는 포트 생략 시 기본적으로 80번 포트로 통신을 시도하는데, 호스트의 8080번만 대기 매핑되어 있고 80번 포트는 열어두지 않았기 때문에",
            "docker run 시 -d 옵션을 썼기 때문에",
            "데이터베이스 컨테이너가 켜져서 충돌했기 때문에"
          ],
          correctIndex: 1,
          explanation: "사용자가 포트 번호를 안 치면 브라우저는 무조건 HTTP 규약에 따라 80 포트로 도달을 꾀합니다. 하지만 호스트 포트 8080번만 도커로 묶어 두었으므로 80 포트는 닫힌 방이나 마찬가지가 되어 연결 거부 장애가 일어납니다."
        }
      },
      {
        id: "3-5",
        title: "도커 컨테이너 상태 검사 및 실시간 로그 모니터링",
        description: "실행된 가상 컨테이너가 무사히 도는지 모니터링하고 가상 터미널 내부로 진입하는 정밀 탐색법을 익힙니다.",
        content: `
          <h3>1. 컨테이너 실시간 가동 현황판 보기</h3>
          <p>도커를 띄웠는데 브라우저가 접속되지 않는다면, 가장 먼저 컨테이너가 켜지자마자 에러로 강제 종료되었는지 상태를 스캔해야 합니다.</p>
          
          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">컨테이너 상태 확인</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('docker ps -a')">Copy</button>
            </div>
            <div class="code-body">
              <pre># 1. 켜져서 동작 중인 살아있는 컨테이너만 조회
docker ps

# 2. 켜져 있는 것과 오류 등으로 이미 종료(Exited)된 것까지 전부 조회
docker ps -a</pre>
            </div>
          </div>
          <p>결과창의 <code>STATUS</code> 열을 봤을 때 <code>Up 5 minutes</code>이면 정상 주행 중인 상태이고, <code>Exited (1) 10 seconds ago</code>이면 소스코드 에러 등으로 10초 전에 비정상 침몰한 상태임을 파악할 수 있습니다.</p>

          <h3>2. 실시간 콘솔 로그(Logs) 파고들기</h3>
          <p>컨테이너가 종료되었거나 오류를 내뱉는다면 스프링의 자바 System.out이나 Exception 로그를 까보아야 합니다.</p>
          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">로그 출력 명령어</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('docker logs -f --tail 100 spring-server')">Copy</button>
            </div>
            <div class="code-body">
              <pre>docker logs -f --tail 100 spring-server</pre>
            </div>
          </div>
          <ul>
            <li><code>-f</code> (follow): 터미널 화면을 종료하지 않고 실시간으로 새롭게 찍히는 로그를 스트리밍해 줍니다.</li>
            <li><code>--tail 100</code>: 예전 로그 수만 줄을 다 띄워 터미널 버퍼를 과부하 시키지 않고, 가장 최근에 생성된 100줄만 잘라 보여줍니다.</li>
          </ul>

          <h3>3. 가동 중인 컨테이너 안으로 직접 기어들어 가기 (Exec)</h3>
          <p>가상 컨테이너 안의 파일 시스템(예: 설정 폴더, 리소스 파일 등)에 들어가보고 싶을 때 사용합니다.</p>
          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">컨테이너 쉘 진입</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('docker exec -it spring-server /bin/bash')">Copy</button>
            </div>
            <div class="code-body">
              <pre>docker exec -it spring-server /bin/bash</pre>
            </div>
          </div>
          <p>이 명령을 실행하면 내 터미널의 대상 포인터가 컨테이너 가상 머신의 내부 Ubuntu 쉘로 빙의하여 직접 내부 리눅스 탐험을 할 수 있습니다. (탈출 시 <code>exit</code> 입력)</p>
        `,
        practice: {
          prompt: "가동 중인 도커 컨테이너 'my-was' 내부로 직접 들어가서 리눅스 명령어(/bin/bash)를 대화형 터미널(-it) 모드로 실행하기 위해 치는 도커 진입 명령어를 작성해 보세요.",
          expectedCommand: "docker exec -it my-was /bin/bash",
          commandHint: "docker exec -it [컨테이너명] [실행할프로그램] 포맷입니다.",
          successMessage: "정답입니다! docker exec 명령은 가동 중인 컨테이너 내부 환경의 문제점을 진단 및 패치할 때 없어서는 안 될 명령어입니다."
        },
        quiz: {
          question: "도커 컨테이너를 생성하여 가동을 노렸으나 docker ps 목록에 전혀 표시되지 않고 자꾸 가라앉아 버립니다. 원인 파악을 위해 가장 먼저 해야 할 후속 진단법은 무엇인가요?",
          options: [
            "docker build 명령을 다시 10번 반복 실행해 본다.",
            "docker ps -a 명령으로 종료된 컨테이너의 잔상을 확인하고, docker logs [컨테이너명] 명령어를 통해 스프링이 자폭한 예외 로그 정보를 열람한다.",
            "AWS 보안그룹 규칙을 싹 다 지운다.",
            "IntelliJ 소프트웨어를 다시 깔아본다."
          ],
          correctIndex: 1,
          explanation: "컨테이너가 뜨자마자 종료된다는 것은 스프링 설정(DB 연결 실패, 자바 런타임 오류, 오타 등)에 에러가 나 자바 프로세스가 자폭 종료되었음을 뜻합니다. logs 명령으로 콘솔 출력을 뜯어보아야 오류 해결의 단서를 찾을 수 있습니다."
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
            <li><strong>파일 드래그 업로드</strong>: 로컬의 <code>demo.jar</code> 파일을 서버의 <code>/home/ubuntu/</code> 경로로 직접 던져 전송합니다.</li>
            <li><strong>프로세스 세대 교체</strong>: 서버 터미널에 SSH로 로그인해서 아래와 같은 수동 교환 작업을 수행합니다.</li>
          </ol>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">수동 프로세스 스위칭 작업</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('ps -ef | grep java\nkill -9 [기존PID]\nnohup java -jar demo.jar > app.log 2>&1 &')">Copy</button>
            </div>
            <div class="code-body">
              <pre># 1. 기존에 실행되고 있는 자바 웹 서버의 프로세스 ID(PID) 조회
ps -ef | grep java

# 2. 찾아낸 기존 PID 프로세스 강제 종료 (Downtime 시작!)
kill -9 [기존_PID_번호]

# 3. 새로 올린 JAR 파일을 백그라운드로 가동 (Nohup)
nohup java -jar demo.jar > app.log 2>&1 &</pre>
            </div>
          </div>

          <div class="warning-box">
            <div class="warning-box-title">❌ 수동 배포의 한계점: 뼈아픈 서비스 정지(Downtime)</div>
            <div class="warning-box-content">
              새로운 JAR 버전으로 갈아끼우려면 기존 8080 포트를 장악하고 있는 구버전을 먼저 죽여야만(kill) 합니다. 그 순간 포트가 빌어 비게 되며, 새 버전의 스프링 부트가 완전히 메모리에 로드되어 <code>Tomcat started</code>를 띄울 때까지의 공백 시간(보통 15초~1분 이상) 동안 사용자가 사이트에 접속하면 <strong>502 Bad Gateway</strong> 혹은 접속 불능 에러 화면을 보게 됩니다. 이를 <strong>다운타임(Downtime)</strong>이라고 하며, 실서비스 중인 토이 프로젝트나 상용 서비스에서는 절대 허용되어서는 안 되는 치명적인 사용자 이탈 요인입니다.
            </div>
          </div>
        `,
        practice: {
          prompt: "현재 동작하고 있는 스프링 서버의 프로세스 ID가 '9988'일 때, 재배포를 위해 해당 프로세스를 단 1초도 지체하지 않고 강제 살해(종료)시키는 리눅스 시그널 명령어를 입력하세요.",
          expectedCommand: "kill -9 9988",
          commandHint: "kill에 강력 강제 옵션(-9)을 붙여 씁니다.",
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
          prompt: "내 로컬에서 구워낸 도커 이미지 'myid/web:latest'를 원격 클라우드 저장소인 Docker Hub 레지스트리로 최종 업로드(전송)시키는 도커 CLI 전송 명령을 작성해 보세요.",
          expectedCommand: "docker push myid/web:latest",
          commandHint: "도커 이미지를 밀어 올린다는 뜻의 명령어인 docker push 뒤에 이미지명을 작성합니다.",
          successMessage: "정답입니다! docker push 명령을 통해 인터넷 세상에 내 컨테이너 배포 이미지가 아카이빙 적재됩니다."
        },
        quiz: {
          question: "도커 컨테이너 기반 배포 기법이 수동 JAR 파일 전송 배포에 비해 서버 복구(롤백) 관점에서 제공하는 가장 직접적인 편의성은 무엇인가요?",
          options: [
            "롤백 시 새로운 자바 소스코드를 수동 코딩해 주므로 편하다.",
            "예전 작동 버전의 도커 이미지가 도커 허브나 서버 캐시에 그대로 보존되어 있으므로, 롤백 명령 단 한 줄로 구버전 즉각 원상 복구가 가능하다.",
            "서버 하드웨어 디스크 용량을 자동으로 늘려준다.",
            "스프링 부트 빌드를 자동으로 취소하기 때문이다."
          ],
          correctIndex: 1,
          explanation: "컨테이너 배포는 빌드 완료된 상태를 이미지 스냅샷으로 영구 소유합니다. 신버전에 치명적 오류가 나면 구버전 이미지 태그를 호출해 새로 띄우는 것만으로 서버의 전진/후진 복구가 실시간 완료됩니다."
        }
      },
      {
        id: "4-3",
        title: "3세대: GitHub Actions를 중심으로 한 CI/CD 자동화 메커니즘",
        description: "깃허브의 원격 자동 빌드/배포 로봇을 활용해 파이프라인을 구축하는 뼈대 개념을 잡습니다.",
        content: `
          <h3>1. 자동화 로봇: CI/CD의 출현</h3>
          <p>개발자가 수동으로 빌드하고, 도커에 올리고, 서버에 접속해 명령어를 치는 반복 노동은 시간 낭비일 뿐 아니라 명령어 오타나 절차 누락 등 사람의 실수(Human Error)를 초래합니다.</p>
          <p>코드를 저장소에 올리기만 하면 빌드, 테스트, 배포 전 과정을 로봇이 원격 대리 집행하도록 구축하는 것이 <strong>CI/CD 자동화</strong>입니다.</p>

          <h3>2. 대표적인 CI/CD 툴</h3>
          <ul>
            <li><strong>Jenkins (젠킨스)</strong>: 전통적인 1위 오픈소스 도구. 강력하지만 전용 설치 서버가 따로 필요하고 설정이 다소 복잡합니다.</li>
            <li><strong>GitHub Actions (깃허브 액션스)</strong>: 코드 저장소인 GitHub에 그냥 기본 내장된 완전 관리형 서비스입니다. 서버 구축 필요 없이 설정 파일(<code>.yml</code>) 하나만 프로젝트 폴더에 넣어두면 깃허브가 컴퓨팅 파워를 알아서 무료 할당해 돌려줍니다. (대세 도구)</li>
          </ul>

          <h3>3. GitHub Actions의 동작 메커니즘</h3>
          
          <div class="info-box">
            <div class="info-box-title">⚙️ 깃허브 액션 구동 흐름</div>
            <div class="info-box-content">
              <ol>
                <li><strong>Trigger (방화쇠)</strong>: 개발자가 <code>git push origin main</code>으로 코드를 밀어 넣음.</li>
                <li><strong>Runner 대여</strong>: GitHub가 가상의 클라우드 리눅스 머신(Runner) 1대를 조용히 빌려 옴.</li>
                <li><strong>Build & Test</strong>: 빌려온 머신 안에서 내 자바 소스코드를 내려받아 JDK를 켜고 컴파일 및 자동 테스트 작동.</li>
                <li><strong>Dockerize</strong>: 통과되면 Docker 이미지로 컴파일하여 Docker Hub에 자동 전송.</li>
                <li><strong>SSH Delivery</strong>: 내 진짜 AWS EC2 서버에 SSH 원격 접속 신호를 날려 배포 가동 스크립트를 수행시킴.</li>
              </ol>
            </div>
          </div>
        `,
        practice: {
          prompt: "GitHub Actions 시스템이 내 프로젝트 안의 설정 파일을 인지하여 자동 실행할 수 있도록, 워크플로 설정 YAML 파일들을 꼭 저장해 두어야 하는 프로젝트 최상단 루트 폴더 하단의 전용 경로(하위 폴더명까지 포함)를 입력하세요.",
          expectedCommand: ".github/workflows",
          commandHint: ".github 폴더 하위에 workflows 폴더를 생성하여 배치해야 깃허브 로봇이 연동됩니다.",
          successMessage: "정답입니다! .github/workflows 폴더는 깃허브가 파이프라인 스크립트를 수색하는 글로벌 공식 지정 디렉토리입니다."
        },
        quiz: {
          question: "GitHub Actions 파이프라인 구축 시 민감 정보(AWS IP 주소, PEM 접속용 비밀키, DB 패스워드 등)를 소스코드 yml 파일에 날것으로 기재하면 안 되는 보안적 사유는 무엇입니까?",
          options: [
            "yml 파일에는 숫자만 적어야 하기 때문에",
            "코드 저장소가 퍼블릭(공개)일 경우 누구나 내 클라우드 기밀 정보를 읽어 서버 탈취 및 랜섬웨어, 암호화폐 채굴 좀비 서버로 악용할 위험이 극도로 크기 때문",
            "기밀 데이터를 적으면 스프링 컴파일이 느려져서",
            "도커 서비스가 yml 파일을 인식하지 못하게 막기 때문"
          ],
          correctIndex: 1,
          explanation: "공개 깃 저장소에 AWS 크레덴셜이나 pem 키 텍스트가 유출되면, 해커봇들이 단 몇 초 만에 이를 스캔하여 요금 폭탄을 유발하는 좀비 인스턴스를 무단 생성합니다. 반드시 암호화 환경 변수 주입(GitHub Secrets) 기능을 이용해야 합니다."
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
        title: "Apache vs Nginx 아키텍처 비교 분석",
        description: "수만 명의 접속자를 스레드 낭비 없이 경량으로 처리하는 이벤트 기반 논블로킹 엔진 구조를 탐구합니다.",
        content: `
          <h3>1. Apache 웹 서버의 원리: Thread/Process Per Connection</h3>
          <p>전통의 강자 Apache는 손님이 1명 올 때마다 <strong>1개의 스레드(혹은 프로세스)</strong>를 생성해 1대1 응대했습니다. 손님이 아무 동작도 안 하고 멍하니 대기(Keep-Alive)하고 있어도 스레드는 일하는 것으로 잡혀 먹혀 다른 유저가 들어오지 못했습니다.</p>
          <p>접속 유저가 1만 명이 넘어가면(C10K 문제) 컴퓨터의 스레드가 수만 개로 증식하여 메모리가 다운되고, CPU는 스레드를 교체 연산하느라 연산 리소스를 100% 낭비하는 임계 상황에 봉착했습니다.</p>

          <h3>2. Nginx 웹 서버의 대안: Event-Driven Architecture</h3>
          <p>Nginx는 완전히 다른 구조를 취합니다. 손님 한 명당 스레드를 붙이지 않습니다.</p>

          <div class="info-box">
            <div class="info-box-title">⚡ 비동기 이벤트 루프와 워커(Worker) 프로세스</div>
            <div class="info-box-content">
              Nginx는 서버의 물리 CPU 코어 개수만큼만 <strong>워커 프로세스(Worker Process)</strong>를 딱 띄워놓고 대기합니다. 그리고 유저 요청을 하나의 <strong>이벤트(Event)</strong> 신호로 규정해 싱글 스레드 이벤트 루프 큐에 차곡차곡 줄을 세웁니다.
              워커 프로세스는 줄 서 있는 이벤트를 쉬지 않고 비동기 논블로킹(Non-blocking)으로 퍼서 날라 처리해 줍니다. 
              유저가 아무런 송수신 없이 가만히 있으면 네트워크 소켓 감지만 하고 스레드 자원을 소모하지 않으므로, 아파치 대비 메모리 사용량이 10분의 1 수준으로 절감되고 동시 접속자 수십만 명도 버텨냅니다.
            </div>
          </div>
        `,
        practice: {
          prompt: "우분투 리눅스 패키지 관리 도구(apt)를 이용해 Nginx 웹 서버 프로그램을 관리자 권한으로 자동 다운로드 및 무단 확인 질문 승인(-y)을 거쳐 설치하는 한 줄의 명령을 작성해 보세요.",
          expectedCommand: "sudo apt install nginx -y",
          commandHint: "sudo apt install [패키지명] 옵션 양식을 고려하세요.",
          successMessage: "정답입니다! 이 명령을 치면 서버에 엔진엑스 리소스가 내려받아져 즉각 80포트 리스닝 데몬이 구동됩니다."
        },
        quiz: {
          question: "Nginx의 이벤트 기반(Event-Driven) 비동기 처리 방식이 대용량 동시 접속에 유리한 근본적 원인은 무엇인가요?",
          options: [
            "서버 CPU의 동작 주파수 속도를 가상으로 늘려주기 때문",
            "동시 접속자 한 명당 스레드를 1:1로 할당하여 메모리를 포화 가동하기 때문",
            "접속 연결을 가볍게 규격화된 신호(이벤트)로만 쌓아두고 소수의 워커 프로세스가 대기 없이 순환 처리하므로 컨텍스트 스위칭과 메모리 낭비가 거의 없기 때문",
            "도커 컨테이너 내부 환경을 강제로 포맷하여 자바 빌드를 생략하기 때문"
          ],
          correctIndex: 2,
          explanation: "Nginx는 스레드를 남발하지 않고, OS 커널 단의 네트워크 이벤트 감지 기술(Epoll 등)을 사용해 신호가 온 커넥션만 실시간 추출 처리하므로 자원 고갈 없는 초경량 가동을 이끌어 냅니다."
        }
      },
      {
        id: "5-2",
        title: "Nginx 기본 디렉토리 구조와 설정 파일 레이아웃",
        description: "리눅스 내 Nginx 관련 주요 설정 파일의 배치 장소와 그 내부 상속 구조를 이해합니다.",
        content: `
          <h3>1. Ubuntu 환경 Nginx 기본 디렉토리 맵</h3>
          <p>Nginx를 설치하면 관련 파일들이 시스템 전역 폴더에 흩어집니다. 이들의 쓰임새를 파악해야 설정 오차를 막을 수 있습니다.</p>
          <ul>
            <li><strong><code>/etc/nginx/</code></strong>: 모든 Nginx 환경 설정의 중심 본부 폴더입니다.</li>
            <li><strong><code>/etc/nginx/nginx.conf</code></strong>: 전역 환경 설정 파일로 메인 프로세스 옵션, 이벤트 루프 옵션, HTTP 코어 설정을 관장합니다.</li>
            <li><strong><code>/etc/nginx/sites-available/</code></strong>: 개별 웹 사이트나 가상 호스트(Virtual Host)의 상세 프록시 설정 파일들을 보관하는 대기 창고 폴더입니다.</li>
            <li><strong><code>/etc/nginx/sites-enabled/</code></strong>: 대기 창고(available)에 있는 설정 파일 중, <strong>실제 서비스로 활성화하여 가동할 파일만 심볼릭 링크(바로가기 아이콘)로 담아두는 실행 폴더</strong>입니다. (여기에 들어 있어야 Nginx가 읽어들입니다.)</li>
            <li><strong><code>/var/log/nginx/</code></strong>: 유저가 들어온 로그(access.log)와 라우팅 에러가 기록되는 로그(error.log) 폴더입니다.</li>
          </ul>

          <div class="warning-box">
            <div class="warning-box-title">⚠️ 꿀팁: sites-enabled의 작동 방식</div>
            <div class="warning-box-content">
              Nginx는 구동 시 <code>nginx.conf</code>를 읽고, 하단에 기재된 <code>include /etc/nginx/sites-enabled/*;</code> 구문을 통해 해당 실행 폴더 안의 파일들만 수집해 작동합니다. 따라서 보통 available 폴더에 원본 설정 파일을 편집해 적고, 그 바로가기를 enabled 폴더에 링크로 뚫어주는 것이 정석 관리 기법입니다.
            </div>
          </div>
        `,
        practice: {
          prompt: "Nginx 서비스가 동작 중에 에러를 뿜으며 주저앉거나 프록싱 오류(502 Bad Gateway)를 유발할 때, 원인을 분석하기 위해 열어보는 Nginx 오류 전용 실시간 로그 파일명(절대경로 /var/log/nginx/ 하단 파일명)을 써보세요.",
          expectedCommand: "/var/log/nginx/error.log",
          commandHint: "오류를 뜻하는 영문 error에 로그 확장자(.log)를 조합하여 절대 경로로 입력합니다.",
          successMessage: "정답입니다! /var/log/nginx/error.log 파일은 프록시 타겟 먹통 현상 등을 파악하는 결정적 열쇠입니다."
        },
        quiz: {
          question: "Nginx 환경 설정 수정 후, 수정한 내역에 문법 오류가 없는지 최종 빌드 검사(컴파일 테스트)를 해보기 위해 실행하는 커맨드는 무엇입니까?",
          options: [
            "sudo nginx -s reload",
            "sudo nginx -t",
            "cat /var/log/nginx/access.log",
            "rm -rf /etc/nginx"
          ],
          correctIndex: 1,
          explanation: "Nginx 가동 재시동 시 오타(예: 세미콜론 누락)가 있으면 서비스가 통째로 뻗어버립니다. 이를 선행 방지하기 위해 'nginx -t' 명령으로 문법 사전 검열을 돌려보는 것이 의무적 안전 지침입니다."
        }
      },
      {
        id: "5-3",
        title: "리버스 프록시(Reverse Proxy) 상세 구성 및 헤더 포워딩",
        description: "Nginx를 앞단에 세우고 proxy_pass와 함께 클라이언트의 진짜 정보를 WAS에 릴레이하는 상세 설정을 작성합니다.",
        content: `
          <h3>1. 리버스 프록시(Reverse Proxy)의 진짜 목적</h3>
          <p>사용자(클라이언트)가 백엔드 포트(8080)에 직접 요청하는 구조는 서버 내부 망의 구성을 외부에 그대로 노출하여 아주 해롭습니다. 리버스 프록시는 최전방 대문(80 포트)에 대기하면서 사용자의 요청을 내밀하게 낚아채어, Nginx의 판단에 따라 내부 WAS 서버에 대리 전달하고 그 응답을 다시 유저에게 포장 배달합니다.</p>

          <h3>2. proxy_set_header의 물리적 필요성</h3>
          <p>Nginx가 중간에서 사용자를 대신해 Spring Boot(8080)에 노선을 뚫어 요청하면, 스프링 서버는 <strong>모든 유저의 접속 IP가 Nginx 자신(127.0.0.1)인 것으로 오인</strong>하게 됩니다.
          스프링 부트 로그에 실제 사용자의 IP가 찍히도록 하고, 보안 세션 필터링을 성공시키려면 Nginx가 요청을 전달할 때 "사실 진짜 유저 IP는 이거였어!" 하고 정보를 <strong>헤더(Header)에 매핑해 동봉</strong>해주어야 합니다.</p>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">/etc/nginx/sites-available/default (프록시 설정 블록)</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('server {\n    listen 80;\n\n    location / {\n        proxy_pass http://127.0.0.1:8080;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    }\n}')">Copy</button>
            </div>
            <div class="code-body">
              <pre><code>server {
    listen 80; # 80포트로 문을 엽니다.

    location / {
        # 127.0.0.1(내부 로컬 루프백)의 8080포트 스프링으로 트래픽 패스
        proxy_pass http://127.0.0.1:8080;

        # 아래 헤더 설정들을 통해 클라이언트 원본 속성 정보를 릴레이
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    }
}</code></pre>
            </div>
          </div>

          <h4>주요 프록시 헤더 해설</h4>
          <ul>
            <li><code>Host</code>: 클라이언트가 원래 도메인창에 입력해 요청했던 오리지널 호스트네임 주소입니다.</li>
            <li><code>X-Real-IP</code>: Nginx에 최초 접근한 사용자의 실제 물리 IP 주소입니다.</li>
            <li><code>X-Forwarded-For</code>: 프록시 서버들을 거쳐오면서 누적 기록된 클라이언트의 경로 IP 리스트입니다.</li>
          </ul>
        `,
        practice: {
          prompt: "Nginx 프록시 설정 블록 내부에서, 들어온 웹 요청 트래픽을 내부 가상망의 WAS 주소(http://127.0.0.1:8080)로 최종 전달할 때 지정하는 Nginx 포워딩 지시어명을 적으세요.",
          expectedCommand: "proxy_pass",
          commandHint: "프록시(proxy)를 통과시킨다는(pass) 소문자 합성어 단어입니다.",
          successMessage: "정답입니다! proxy_pass 지시어를 통해 내부 포트 연동이 기획 성사됩니다."
        },
        quiz: {
          question: "Nginx 설정 구문 내부에서 proxy_set_header X-Real-IP $remote_addr; 지시어를 기술하지 않고 배포했을 때 일어나는 부작용으로 알맞은 것은 무엇인가요?",
          options: [
            "웹 사이트에 이미지가 아예 로드되지 않는다.",
            "Spring Boot WAS 서버 애플리케이션 로그 상에 찍히는 방문자들의 접속 IP 정보가 죄다 Nginx 서버 주소(127.0.0.1)로 단일 박제되어 식별 불능 상태가 된다.",
            "S3 버킷의 정적 업로드가 영구 차단된다.",
            "자바 빌드에 1시간 이상 소요된다."
          ],
          correctIndex: 1,
          explanation: "Nginx가 중간에서 중개인 역할을 하므로, WAS 입장에서는 오직 바로 앞단에서 요청을 릴레이해준 Nginx의 로컬 루프백 IP(127.0.0.1)만 접속자로 인지합니다. 원래 사용자의 IP를 로깅하기 위해 이 포워딩 헤더 지정이 강제 필수적입니다."
        }
      },
      {
        id: "5-4",
        title: "업스트림(Upstream) 로드 밸런서 이중화 구성 실무",
        description: "동시 트래픽 부하 분산을 위해 가상의 웹 백엔드 서버 그룹을 정의하고 로드 밸런싱을 세팅합니다.",
        content: `
          <h3>1. 로드 밸런싱(Load Balancing)이란?</h3>
          <p>아무리 서버 사양이 좋아도, 블랙 프라이데이나 트래픽이 폭증하는 상황에서는 1대의 Spring Boot WAS 컴퓨터가 비명을 지르며 다운될 수 있습니다. 이를 막기 위해 스프링 부트를 2대(예: 8081 포트용, 8082 포트용) 병렬로 실행해 둡니다. Nginx는 트래픽의 절반씩을 각 포트로 균등 배분하여 서버의 부하를 50%씩 획기적으로 낮춥니다.</p>

          <h3>2. Upstream 지시어를 통한 다중 WAS 설정</h3>
          <p>Nginx 설정에 <strong><code>upstream</code></strong> 블록을 선언하고 가상의 백엔드 묶음명을 정의합니다.</p>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">/etc/nginx/conf.d/load-balancer.conf</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('upstream spring_cluster {\n    server 127.0.0.1:8081;\n    server 127.0.0.1:8082;\n}\n\nserver {\n    listen 80;\n    location / {\n        proxy_pass http://spring_cluster;\n    }\n}')">Copy</button>
            </div>
            <div class="code-body">
              <pre><code># 1. 'spring_cluster' 라는 이름으로 내부 WAS 2대를 묶어 상류(Upstream) 정의
upstream spring_cluster {
    server 127.0.0.1:8081; # WAS 1호기
    server 127.0.0.1:8082; # WAS 2호기
}

server {
    listen 80;

    location / {
        # 2. 개별 포트 대신 묶음 클러스터명으로 토스!
        proxy_pass http://spring_cluster;
        
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
    }
}</code></pre>
            </div>
          </div>

          <h3>3. 로드 밸런싱 세부 알고리즘</h3>
          <ul>
            <li><strong>Round Robin (기본값)</strong>: 공평하게 한 명씩 순서대로 8081 -> 8082 -> 8081 -> 8082 교차 전달합니다.</li>
            <li><strong>Least Connections</strong>: 현재 실시간 처리 중인 요청 수가 가장 적어 한적한 WAS 서버에 트래픽을 밀어줍니다.</li>
            <li><strong>IP Hash</strong>: 유저의 고유 IP 주소를 암호 해싱하여 항상 최초 연결되었던 그 포트 서버로만 지속 접속시켜 줍니다. (WAS 세션 데이터가 공유 데이터베이스와 연동되지 않아 로그인 유지가 시급한 레거시 인프라에서 궁여지책으로 사용합니다.)</li>
          </ul>
        `,
        practice: {
          prompt: "Nginx 로드 밸런서 설정 중, 특정 대상 백엔드 서버(예: 8081 포트 장비)의 처리 가동율을 3배 높이도록 가중치 비중 분배를 설정할 때, 서버 포트 주소 뒤에 공백 한 칸 띄우고 적어주는 지시 옵션 구문(weight 대입식)을 써보세요.",
          expectedCommand: "weight=3",
          commandHint: "weight 뒤에 이퀄(=) 기호와 숫자 3을 붙여 씁니다.",
          successMessage: "정답입니다! weight=N 지시어를 덧붙이면 고사양 서버 장비에 호출 비중을 가중 분배할 수 있습니다."
        },
        quiz: {
          question: "Nginx의 Upstream 블록 내에 기재된 다중 서버 대상 중 특정 서버 포트가 작동 중지(Crash)되었을 때 일어나는 현상은 무엇입니까?",
          options: [
            "웹 사이트가 영구 복구 불가능하게 깨진다.",
            "Nginx가 똑똑하게 장애 포트를 감지하고 정상 작동하고 있는 다른 WAS 포트 서버로만 트래픽을 알아서 우회(Failover) 분배해 준다.",
            "도커 서비스가 OS를 강제 윈도우로 바꾼다.",
            "서버 CPU 성능이 0%로 고착된다."
          ],
          correctIndex: 1,
          explanation: "Nginx 로드 밸런서는 살아있는 백엔드 서버 풀(Pool)을 지속 제어합니다. 한 WAS 장치가 헬스 체크 실패 등으로 반응이 끊기면, 해당 장치를 제외한 정상 노드로 요청을 우회 포워딩(장애 복구 - Failover)하여 대외 서비스 중단을 사전에 예방합니다."
        }
      }
    ]
  },
  {
    id: "module-6",
    title: "6. AWS S3 + CloudFront + Route 53 정적 웹사이트 배포",
    sections: [
      {
        id: "6-1",
        title: "React/Vue 빌드 결과물 패키지 구성 및 Amazon S3 정적 호스팅",
        description: "클라우드 무제한 스토리지에 프론트 리소스를 저장하고 고비용 웹서버 없이 정적 웹 호스팅을 구성합니다.",
        content: `
          <h3>1. S3 (Simple Storage Service)의 본질과 정적 호스팅의 비밀</h3>
          <p>React, Vue, Next.js(Static Export) 등 현대 프론트엔드 프로젝트를 빌드(<code>npm run build</code>)하면 생성되는 산출물은 자바 서버처럼 구동 연산이 필요 없는 단순 HTML, CSS, Javascript, PNG 리소스의 덩어리(정적 리소스)들입니다.</p>
          <p>S3는 가상 디렉토리 스토리지입니다. 여기에 이 정적 파일을 싹 업로드하고 <strong>정적 웹 사이트 호스팅(Static Website Hosting)</strong> 설정을 켜면, 비싼 웹 서버 장비를 직접 구축하고 임대할 필요 없이 월 몇십 원 수준의 극저비용으로 프론트엔드 사이트를 무제한 트래픽에 맞춰 전 세계에 유통할 수 있습니다.</p>

          <h3>2. S3 정적 호스팅 배포 4단계 구축 매뉴얼</h3>
          
          <h4>Step 1. S3 버킷 생성</h4>
          <p>AWS S3 대시보드로 이동해 <strong>버킷 만들기(Create Bucket)</strong>를 클릭합니다. 버킷명은 전 세계에서 유일해야 합니다. 리전은 서울로 설정합니다.</p>
          
          <h4>Step 2. 퍼블릭 액세스 차단 해제 (임시 오픈)</h4>
          <p>S3 버킷은 기본적으로 외부인이 열람할 수 없게 차단되어 있습니다. <code>이 버킷의 퍼블릭 액세스 차단 설정을 전부 해제</code> 체크 박스를 비활성화하여 외부 유입 구멍을 열어줍니다.</p>

          <h4>Step 3. 정적 웹 사이트 호스팅 활성화</h4>
          <p>생성 완료된 버킷의 <code>속성(Properties)</code> 탭 맨 하단으로 내려가 <strong>정적 웹 사이트 호스팅 편집</strong>을 누르고 <strong>활성화</strong>를 선택합니다.<br/>
          인덱스 문서와 오류 문서 양쪽 모두에 <strong><code>index.html</code></strong>을 기입하고 저장합니다.</p>

          <h4>Step 4. 버킷 읽기 권한 정책(Bucket Policy) 등록</h4>
          <p>버킷의 <code>권한(Permissions)</code> 탭 중간의 버킷 정책 편집을 눌러 외부 사용자가 들어왔을 때 열람 권한을 승인하는 아래 JSON 정책을 붙여넣고 저장합니다.</p>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">버킷 정책 JSON</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('{\n  \&quot;Version\&quot;: \&quot;2012-10-17\&quot;,\n  \&quot;Statement\&quot;: [\n    {\n      \&quot;Sid\&quot;: \&quot;PublicReadGetObject\&quot;,\n      \&quot;Effect\&quot;: \&quot;Allow\&quot;,\n      \&quot;Principal\&quot;: \&quot;*\&quot;,\n      \&quot;Action\&quot;: \&quot;s3:GetObject\&quot;,\n      \&quot;Resource\&quot;: \&quot;arn:aws:s3:::내버킷명/*\&quot;\n    }\n  ]\n}')">Copy</button>
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
      "Resource": "arn:aws:s3:::[여기에_본인의_S3_버킷명]/*"
    }
  ]
}</code></pre>
            </div>
          </div>
        `,
        practice: {
          prompt: "S3 버킷 정책 JSON에서 권한 제어를 설정할 때, 특정 폴더나 자원 위치를 명시하는 AWS의 물리 리소스 이름 고유 접두사 규격명(영문 대문자 3글자)을 쓰세요.",
          expectedCommand: "ARN",
          commandHint: "Amazon Resource Name의 약자입니다.",
          successMessage: "정답입니다! ARN 접두사를 활용해 대상 버킷 리소스의 세부 범위를 가둡니다."
        },
        quiz: {
          question: "S3 정적 호스팅 설정 중 오류 문서(Error Document) 항목에도 index.html을 중복 작성해야 하는 React SPA 구조만의 고유한 기술적 이유는 무엇인가요?",
          options: [
            "index.html이 기밀 유출 방지를 위한 암호화 파일이기 때문에",
            "React는 단 1개의 index.html에서 모든 페이지 전환을 클라이언트 브라우저가 직접 동적 연산(SPA Routing)하기 때문에, S3 물리 서버 측에 존재하지 않는 하위 경로(/login 등)로 접속 시 발생하는 404 에러를 다시 index.html로 돌려주어야 화면 라우팅이 성사되므로",
            "오류 문서 설정을 비워두면 AWS가 인스턴스를 강제 폐쇄하여 요금을 물리기 때문에",
            "Tomcat WAS와의 통신 속도를 고속화하기 위해"
          ],
          correctIndex: 1,
          explanation: "전통적 사이트와 달리 React는 단 하나의 index.html을 로딩하여 화면 전환(Virtual DOM)을 클라이언트 단에서 속여 연산합니다. S3 서버 입장에서는 사용자가 /login 주소로 요청 시 해당 폴더나 html 파일이 없어 404 에러를 내뿜게 되는데, 이때 index.html을 우회 반환해 주어야 라우팅 오류 없이 페이지가 온전히 뜹니다."
        }
      },
      {
        id: "6-2",
        title: "AWS CloudFront CDN 결합 및 OAC S3 보안 격리",
        description: "정적 파일을 글로벌 캐시 edge 서버로 뿌려 지연 속도를 억제하고 HTTPS 인증 연결을 적용합니다.",
        content: `
          <h3>1. S3 호스팅의 명확한 단점과 CloudFront(CDN)의 출현</h3>
          <p>S3 정적 호스팅만 활용하면 치명적인 2가지 단점이 남습니다.</p>
          <ol>
            <li><strong>지리적 한계</strong>: 파일이 저장된 서울 S3 리전에서 거리가 먼 해외(미국, 유럽 등) 유저가 접속 시 로딩 속도가 수 초 이상 늘어납니다.</li>
            <li><strong>HTTPS 적용 불가능</strong>: S3 정적 호스팅 자체의 원본 엔드포인트 도메인은 보안 연결 프로토콜(HTTPS)의 탑재가 불가하여 크롬 브라우저에서 '이 사이트는 보안 연결이 설정되지 않았습니다' 경고를 유발합니다.</li>
          </ol>
          <p>이를 구원해 줄 <strong>글로벌 CDN</strong> 도구가 바로 <strong>Amazon CloudFront</strong>입니다.</p>

          <h3>2. CloudFront Edge 캐싱 원리</h3>
          <p>CloudFront는 전 세계의 수백 군데 주요 거점 도시(Edge Location)마다 고성능 캐시 서버를 배치합니다. 사용자가 사이트에 들어오면, 서울 S3까지 가기 전에 사용자 물리 위치와 가장 가까운 도시의 엣지 캐시 서버에서 React 파일을 즉각 반환해 주어 기동 지연 속도를 거의 제로화합니다.</p>

          <h3>3. OAC (Origin Access Control) 보안 격리 설정</h3>
          <p>외부 해커나 유저가 S3 원본 도메인으로 직접 들어와 우회 침투하는 위협을 막고 모든 유입 통로를 CloudFront 대문으로 단일 강제 통합하기 위한 기능이 OAC입니다.</p>
          <ul>
            <li>OAC를 켜면, S3 버킷의 '퍼블릭 액세스 허용'을 다시 완전 '차단'으로 바꾸어 자물쇠를 걸 수 있습니다.</li>
            <li>그 후, S3 버킷 정책에 "오직 CloudFront 배포 아이디가 보낸 조회 서명만 신용하여 s3:GetObject를 허용한다"는 특수 서명 조건 정책만 남깁니다.</li>
          </ul>

          <div class="warning-box">
            <div class="warning-box-title">🔄 새 버전 배포 시 필수 행위: 캐시 무효화 (Invalidation)</div>
            <div class="warning-box-content">
              React 코드를 패치해 S3에 다시 올려도, CloudFront 엣지 캐시 서버에 저장된 기존 캐시들의 수명(TTL, 보통 24시간)이 남았다면 유저는 여전히 옛날 화면을 보게 됩니다. 
              배포가 끝나면 반드시 CloudFront 콘솔로 이동하여 <strong>Invalidation(무효화)</strong> 탭에서 <strong><code>/*</code></strong> 경로를 입력 및 실행하여 전 세계 엣지 캐시를 강제로 청소해 주어야 즉시 새 화면이 뜹니다.
            </div>
          </div>
        `,
        practice: {
          prompt: "S3 원본의 직접 노출을 완전 차단하고, 오직 특정 CloudFront CDN 배포 경로를 통해서만 버킷 콘텐츠를 조회하도록 서명 필터링하는 최신의 보안 접근 통제 기술의 약어(영문 대문자 3글자)를 적으세요.",
          expectedCommand: "OAC",
          commandHint: "Origin Access Control의 첫 글자 조합입니다. (과거 OAI의 대체 진화 기능)",
          successMessage: "정답입니다! OAC 보안 연동은 S3 버킷의 퍼블릭을 조여 닫고 안전하게 사이트를 개방하는 핵심 보안 수단입니다."
        },
        quiz: {
          question: "React 정적 소스코드를 수정한 뒤 S3에 덮어쓰기 완료했음에도, 브라우저로 접속 시 수정 사항이 즉각 반영되지 않고 구버전 레이아웃 화면이 계속 띄워지는 이유와 조치 방법은 무엇인가요?",
          options: [
            "인터넷 전용 대역폭이 좁아서 - 전원을 끈다.",
            "CloudFront 엣지 서버들에 저장된 구버전 캐시의 유효 기한(TTL)이 남았기 때문이며, CloudFront 콘솔에서 Invalidation(캐시 무효화) 메뉴를 선택해 '/*' 경로로 캐시를 강제 비워주어야 해결된다.",
            "자바 서버의 JVM 설정에 에러가 났으므로 Docker를 재부팅한다.",
            "S3가 파일의 압축을 강제로 해제하지 못했으므로 zip 파일로 재업로드한다."
          ],
          correctIndex: 1,
          explanation: "CDN 시스템은 속도 향상을 위해 오리진의 정적 복사본을 Edge 서버에 캐싱 보관합니다. 오리진 원본이 갱신되면 엣지에 이 사실을 알려 구버전 캐시를 청소하는 '캐시 무효화(Invalidation)' 태스크를 필히 실행해 주어야 합니다."
        }
      },
      {
        id: "6-3",
        title: "Route 53 DNS 연결 및 ACM 무료 SSL 인증서 장착",
        description: "임시 가상 도메인을 탈피하고 진짜 상용 도메인 주소와 공식 기관의 HTTPS SSL 체인을 연결합니다.",
        content: `
          <h3>1. 도메인 호스팅 영역(Hosted Zone) 연결</h3>
          <p>사용자에게 <code>dxxx.cloudfront.net</code> 같이 기괴한 주소를 공유할 순 없습니다. 진짜 나만의 도메인 주소로 연결판을 짭니다.</p>
          <ol>
            <li>가비아나 고대디 등에서 <code>my-shop.store</code> 와 같은 도메인을 하나 구매 획득합니다.</li>
            <li>AWS <strong>Route 53</strong> 대시보드로 이동해 <strong>호스팅 영역 생성(Create Hosted Zone)</strong>을 누르고 내 도메인명을 입력해 생성합니다.</li>
            <li>생성 완료 시 Route 53가 네임서버(NS) 레코드 주소 4줄을 발행합니다. 이 4줄을 복사해 도메인을 구매했던 대행사(가비아 등) 사이트의 '1차~4차 네임서버' 정보란에 기재하여 도메인 네트워크 지배권을 AWS Route 53로 인계합니다.</li>
          </ol>

          <h3>2. ACM (AWS Certificate Manager) 무료 보안서 발급</h3>
          <p>보안 통신에 필요한 인증서를 인증 전문 대행사에 돈을 주고 사지 않고, AWS 내부에서 전산 검증을 통해 완전 무료로 발급받아 관리할 수 있게 돕는 고마운 관리 도구입니다.</p>

          <div class="warning-box">
            <div class="warning-box-title">⚠️ 중요: ACM 발급 요청 시 리전 지정 규칙</div>
            <div class="warning-box-content">
              <strong>CloudFront 배포에 장착할 SSL 인증서는 반드시 미국 동부(버지니아 북부 - us-east-1) 리전에서 발급받으셔야 연동이 가능합니다.</strong> 서울 리전에서 발급한 인증서는 CloudFront의 글로벌 배포판 마법사에서 리스트에 노출되지 않으니 극도로 주의하세요!
            </div>
          </div>

          <h4>인증서 신청 및 CNAME 도메인 소유 증명 단계</h4>
          <ul>
            <li>ACM 콘솔(버지니아 북부 리전)로 이동해 <code>인증서 요청</code> 클릭 -> 내 도메인 이름(<code>*.my-shop.store</code> 및 <code>my-shop.store</code>) 기재 -> 검증 방법 <code>DNS 검증</code> 선택 후 요청합니다.</li>
            <li>발급 대기 상태가 되면, 도메인 실소유주 인증을 위한 CNAME 레코드가 나옵니다. <code>Route 53에서 레코드 생성</code> 단축 버튼을 누르면 Route 53에 검증용 DNS가 자동 설정되어 몇 분 내에 인증서가 <strong>발급 완료(Issued)</strong>로 녹색 활성화됩니다.</li>
          </ul>
        `,
        practice: {
          prompt: "AWS Certificate Manager(ACM) 무료 보안 인증서를 연동하여 CloudFront CDN 웹 서비스에 SSL/TLS를 입히고자 할 때, 인증서 요청 전 무조건 선택하여 맞추어야 하는 AWS의 물리 글로벌 기본 리전명(영문 us-로 시작하는 리전 식별자)을 적으세요.",
          expectedCommand: "us-east-1",
          commandHint: "미국 동부 버지니아 북부의 리전 식별 코드입니다.",
          successMessage: "정답입니다! CloudFront와 묶일 SSL 인증서는 물리적 전파 제약으로 인해 반드시 us-east-1 리전에서만 생성해야 호출 리스트에 잡힙니다."
        },
        quiz: {
          question: "Route 53에서 DNS 도메인 제어권을 장악하기 위해 도메인 구매 사이트(가비아 등)의 관리 탭에 필수로 이전 기입해야 하는 네임서버 레코드 종류는 무엇인가요?",
          options: [
            "A 레코드",
            "CNAME 레코드",
            "NS 레코드",
            "TXT 레코드"
          ],
          correctIndex: 2,
          explanation: "네임서버(NS, Name Server) 레코드는 도메인의 실질 통제권을 타사(여기서는 AWS Route 53)로 완전히 위임해 주기 위해 4줄의 네임서버 라인을 교체하는 네트워크 최상위 도메인 명세 지시어입니다."
        }
      },
      {
        id: "6-4",
        title: "Route 53 A 레코드 별칭(Alias)을 통한 CloudFront 도메인 연결",
        description: "나만의 고유 도메인을 치고 왔을 때 CloudFront로 도달하도록 DNS 맵을 최종 성사시킵니다.",
        content: `
          <h3>1. 도메인 연결의 마지막 조각</h3>
          <p>이제 ACM 인증서가 발급되었고, 도메인 NS가 AWS로 이관되었으며, S3에 React 소스가 담긴 채 CloudFront 배포판이 완성되어 있습니다. 이들을 Route 53가 지휘하여 한 노선으로 연결하게 만듭니다.</p>

          <h3>2. 최종 DNS 레코드 설정 단계</h3>
          
          <h4>Step 1. CloudFront 별칭(CNAME) 등록</h4>
          <p>CloudFront 배포 상세 페이지의 <code>일반</code> 탭 - <code>편집</code>으로 진입합니다.<br/>
          - <strong>대체 도메인 이름 (CNAME)</strong> 칸에 내가 구매한 도메인명(예: <code>my-shop.store</code>)을 입력합니다.<br/>
          - <strong>사용자 지정 SSL 인증서</strong>에서 ACM에서 미리 버지니아 북부 리전으로 고속 발급받아 둔 <code>*.my-shop.store</code> 인증서를 리스트에서 찾아 클릭 매핑해 주고 설정을 저장합니다.</p>

          <h4>Step 2. Route 53에서 A 레코드 생성</h4>
          <p>Route 53 대시보드 - 호스팅 영역 - 내 도메인을 클릭해 레코드 생성 페이지로 들어갑니다.</p>
          <ul>
            <li><strong>레코드 유형</strong>: <strong><code>A</code></strong> 레코드를 고릅니다. (대체 도메인 IP 연결)</li>
            <li><strong>별칭 (Alias) 토글</strong>: 오른쪽에 있는 슬라이드 버튼을 활성화하여 <strong>ON</strong> 상태로 바꿉니다. (AWS 리소스 직접 바인딩 옵션)</li>
            <li><strong>트래픽 대상 선택</strong>: <code>CloudFront 배포에 대한 별칭</code>을 고르고, 내 CloudFront 주소(dxxx.cloudfront.net)를 찾아서 클릭 매핑합니다.</li>
          </ul>

          <div class="info-box">
            <div class="info-box-title">💡 일반 CNAME 대신 A레코드 별칭(Alias)을 쓰는 핵심 가치</div>
            <div class="info-box-content">
              일반 도메인의 루트(예: <code>my-shop.store</code> 앞에 www 안 붙인 순수 주소)는 DNS 규격상 CNAME 레코드를 쓸 수 없는 철칙 제약이 존재합니다. 
              하지만 Route 53의 별칭(Alias) 기술은 AWS 내부에서 CloudFront 배포와 도메인을 A레코드 속도로 다이렉트 이어주며, IP가 가변되어도 요금 청구 없이 알아서 경로 매핑을 실시간 추적 보장해 주는 AWS만의 전용 강력 기능입니다.
            </div>
          </div>
        `,
        practice: {
          prompt: "도메인과 특정 IP 주소를 1대1 매핑하여 다이렉트 매핑해 줄 때 사용되는, 도커나 배포에서 가장 흔히 생성하게 되는 기본 DNS IP 호스트 레코드 유형(영문 대문자 1글자)을 적으세요.",
          expectedCommand: "A",
          commandHint: "Address의 앞 글자 영문 단수형입니다.",
          successMessage: "정답입니다! A 레코드는 도메인을 도달하고자 하는 최종 목적지 IP 주소와 직선 연결해 주는 대표 표준 규격입니다."
        },
        quiz: {
          question: "Route 53에서 A 레코드 생성 시 '별칭(Alias)' 설정을 켜서 CloudFront를 매핑하는 방식이 가지는 장점 중 잘못 설명한 것은 무엇인가요?",
          options: [
            "별칭을 이용하면 가상 도메인 주소(cloudfront.net)에 대해 DNS 요청 추가 비용이 영구 면제된다.",
            "www가 붙지 않은 최상위 루트 도메인(예: mysite.com) 주소에 대해서도 CloudFront CDN을 손쉽게 바인딩할 수 있다.",
            "CloudFront 배포지의 내부 동적 IP가 예기치 않게 변경되더라도 AWS가 알아서 매핑을 실시간 유지해 준다.",
            "이 설정을 켜면 S3 원본의 HTML 정적 파일에 담긴 자바스크립트 버그가 자동으로 디버깅 제거된다."
          ],
          correctIndex: 3,
          explanation: "Route 53 별칭 설정은 도메인 IP 해석(네트워크 라우팅)의 동적 편의와 비용 절감을 돕는 서비스 레이어일 뿐이며, 프론트엔드 자바스크립트 코드 내부의 로직 에러를 추적해 소스 코드를 자가 수정해 주는 지능형 디버깅 AI 시스템이 아닙니다."
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
        title: "무중단 배포(Zero-Downtime Deployment)의 당위성 및 종류",
        description: "재배포 동안 1초의 화면 끊김도 방지해야 하는 비즈니스적 가치와 배포 기법의 갈래를 배웁니다.",
        content: `
          <h3>1. 무중단 배포가 왜 우리 서비스에 필수일까요?</h3>
          <p>사용자가 열심히 쇼핑몰에서 상품을 고르고 결제 버튼을 누르려는 찰나에 개발자가 패치를 올린답시고 구버전을 죽이고 신버전을 띄우는 30초의 공백을 초래했다면, 결제 트랜잭션이 깨지고 사용자는 에러 화면을 보며 이탈해 버릴 것입니다. 
          따라서 실서비스를 운영하는 비즈니스 환경에서는 <strong>서버 중단 시간이 0초(Zero-Downtime)인 무중단 배포</strong>가 인프라 구축의 최소 요건입니다.</p>

          <h3>2. 무중단 배포의 대표적인 3대 기법</h3>
          
          <h4>1) 롤링 (Rolling) 배포</h4>
          <p>2대 이상의 서버 장비 중 1대씩 순차적으로 트래픽을 차단하고 끈 뒤, 새 버전을 구동해 다시 켜서 투입하는 릴레이 방식입니다. 
          따로 신규 임대 장비 예산이 안 들어 경제적이지만, 도중에 구버전과 신버전이 공존하여 유저가 매번 다른 화면을 보게 될 우려가 있고 배포 도중 임시적으로 남은 서버들의 부하가 일시 폭증합니다.</p>
          
          <h4>2) 카나리 (Canary) 배포</h4>
          <p>신규 패치 버전을 극소수(예: 5%)의 유저에게만 맛보기로 노출해 버그가 없는지 마루타 테스트를 진행한 뒤 점진적으로 비율을 늘리는 기법입니다. (안정성 검증에 유리)</p>

          <h4>3) 블루-그린 (Blue-Green) 배포</h4>
          <p>현재 사용자가 서 있는 운영 존인 <strong>Blue(예: 8081포트)</strong> 환경과 완전히 동일한 쌍둥이 유휴 존인 <strong>Green(예: 8082포트)</strong> 환경을 가상으로 꾸립니다.</p>
          
          <div class="info-box">
            <div class="info-box-title">📘 Blue-Green 배포의 무중단 스위칭 흐름</div>
            <div class="info-box-content">
              <ul>
                <li>사용자는 항상 Nginx(80포트)를 바라봅니다. Nginx는 현재 <code>8081(Blue)</code>로 프록시 중입니다.</li>
                <li>배포 로봇이 몰래 노는 땅인 <code>8082(Green)</code>에 새 버전의 컨테이너를 실행시킵니다.</li>
                <li>새 버전이 부팅 완료되어 헬스 체크가 성공적으로 통과하면, Nginx 설정만 <code>8082(Green)</code>로 덮어쓰고 <code>nginx -s reload</code> 시켜 단 0.001초 만에 트래픽 방향을 스위칭합니다.</li>
                <li>기존 <code>8081(Blue)</code> 컨테이너는 이제 꺼서 자원을 환수합니다.</li>
                <li><strong>장점</strong>: 구/신버전 혼재 시간이 없고, 문제 발생 시 이전 포트로 1초 만에 롤백 전환이 되며 다운타임이 완전히 0초입니다. (가장 널리 쓰이는 표준 방식)</li>
              </ul>
            </div>
          </div>
        `,
        practice: {
          prompt: "무중단 배포 기법 중, 기존 운영 중인 서버와 완벽히 동일한 용량의 별개 가상 인프라 영역을 구축해 두고 Nginx 라우터의 가리키는 포트 방향만 동적으로 한 번에 전체 교체해 통과시키는 배포 명칭을 한글(블루-그린)로 써보세요.",
          expectedCommand: "블루-그린",
          commandHint: "두 가지 색상의 영문 이름을 한글 대시(-) 기호와 함께 적습니다.",
          successMessage: "정답입니다! 블루-그린 배포는 롤백 편의성과 구/신버전 혼선 부재로 안정적 서비스 이중화에 기여합니다."
        },
        quiz: {
          question: "무중단 배포 기법 중 '롤링(Rolling) 배포' 방식이 지니는 고유의 불안 요인은 무엇인가요?",
          options: [
            "서버 장비를 매번 2배로 사야 해서 예산 낭비가 매우 크다.",
            "배포 도중 일부 인스턴스는 구버전, 일부 인스턴스는 신버전 코드로 구동되는 상태가 병렬 지속되므로, 유저가 마우스 새로고침을 누를 때마다 일시적으로 구/신 기능이 번갈아 노출되는 부작용이 있다.",
            "자바 JVM 가동이 아예 불가능하기 때문이다.",
            "Nginx 웹서버가 80포트를 점유할 수 없어서"
          ],
          correctIndex: 1,
          explanation: "Rolling 배포는 점진 교체 방식이므로 배포 도중 구버전 WAS와 신버전 WAS가 동시 기동되어 트래픽을 절반씩 받게 됩니다. API 데이터 변경 등으로 호환성 어긋남이 있다면 데이터 정합성 충돌을 일으키기 쉽습니다."
        }
      },
      {
        id: "7-2",
        title: "Nginx 동적 연결 설정 및 service-url.inc 인클루드 기법",
        description: "nginx.conf 내부 설정을 훼손하지 않고, 스프링 포트 주소만 동적으로 갈아끼우는 가상 링커를 심습니다.",
        content: `
          <h3>1. 왜 nginx.conf 전체를 수정하면 안 되나요?</h3>
          <p>배포 쉘 스크립트가 매번 배포할 때마다 Nginx의 메인 환경 설정 파일인 <code>nginx.conf</code>나 <code>default</code> 설정 문서의 전체 줄을 직접 파싱해 포트 글자만 바꾸는 구조는 구현이 극도로 까다롭고, 스크립트 오작동 시 설정 구문 전체가 오염되어 전체 웹 서비스가 영구 마비되는 끔찍한 연쇄 장애를 낳습니다.</p>
          <p>해결책은 <strong>스프링 주소를 담을 단 한 줄짜리 미니 설정 파일(<code>service-url.inc</code>)을 독자 분리하여 include 문법으로 참조</strong>시키는 기법입니다.</p>

          <h3>2. Nginx 동적 링킹 설정의 구성도</h3>
          
          <h4>Step 1. 포함용 포트 정보 설정 파일 생성</h4>
          <p>리눅스 서버의 Nginx 설정 폴더 내에 스프링 포트를 변수로 선언해 둔 작은 설정을 만듭니다.</p>
          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">/etc/nginx/conf.d/service-url.inc (내용 1줄)</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('set $service_url http://127.0.0.1:8081;')">Copy</button>
            </div>
            <div class="code-body">
              <pre>set \$service_url http://127.0.0.1:8081;</pre>
            </div>
          </div>

          <h4>Step 2. 메인 프록시 설정 문서에서 변수 호출</h4>
          <p>sites-available의 설정 파일에서 이 파일을 <strong><code>include</code></strong> 시키고, <code>proxy_pass</code>에 하드코딩된 주소 대신 선언된 변수명(<strong><code>$service_url</code></strong>)을 대입합니다.</p>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">/etc/nginx/sites-available/default</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('server {\n    listen 80;\n\n    # 1. 포트 정보를 변수로 동적 include 로드\n    include /etc/nginx/conf.d/service-url.inc;\n\n    location / {\n        # 2. 고정 주소 대신 변수명을 프록시 패스 주소로 대입!\n        proxy_pass $service_url;\n        \n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n    }\n}')">Copy</button>
            </div>
            <div class="code-body">
              <pre><code>server {
    listen 80;

    # 1. 포트 변수 선언 정보를 동적으로 include 로드!
    include /etc/nginx/conf.d/service-url.inc;

    location / {
        # 2. 고정 주소 대신 include에서 정의된 변수명으로 프록시 패스!
        proxy_pass \$service_url;
        
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    }
}</code></pre>
            </div>
          </div>
          <p>이렇게 조율해 두면, 이후 배포 로봇은 위험한 sites-available 파일을 건드리지 않고, 안전하고 단순한 <code>service-url.inc</code> 파일 내부의 텍스트 한 줄만 <code>8081</code>에서 <code>8082</code>로 덮어쓰고 <code>nginx -s reload</code>만 먹여주면 트래픽 노선 교체가 단번에 완수됩니다.</p>
        `,
        practice: {
          prompt: "외부 설정 파일 조각을 현재 설정 블록 내로 불러와 상속 결합시키기 위해 Nginx 설정 문서 내에 작성하는 특수 지시어 영단어를 입력하세요.",
          expectedCommand: "include",
          commandHint: "포함한다는 의미의 영문 소문자 7글자 단어입니다.",
          successMessage: "정답입니다! include 지시어를 활용해 Nginx 설정을 컴포넌트 단위로 모듈화할 수 있습니다."
        },
        quiz: {
          question: "Nginx의 프록시 패스 목적지를 $service_url 변수로 동적 우회시키기 위해 외부 inc 파일을 include하여 활용하는 인프라적 강점은 무엇입니까?",
          options: [
            "자바 컴파일 속도가 2배 빨라지기 때문",
            "Nginx 메인 프록시 설정 뼈대 코드를 직접 덮어쓰다 구문 기호 오류를 내는 참사를 막고, 단지 포트 주소 한 줄만 덮어쓰는 단순 안전 구조로 동적 스위칭이 가능해지기 때문",
            "도커 컨테이너의 하드디스크를 무제한 백업하기 때문",
            "S3 버킷의 정적 캐싱 유효기간(TTL)을 초기화하기 때문"
          ],
          correctIndex: 1,
          explanation: "Nginx 환경 설정 전체를 매번 배포할 때마다 텍스트 파싱 처리하는 것은 구문 손상 위험이 너무 큽니다. 포트 변수 문자열만 별도의 단순 텍스트 파일로 격리하여 갱신하는 기법이 인프라 안정성 유지에 대단히 뛰어납니다."
        }
      },
      {
        id: "7-3",
        title: "무중단 배포 자동화 쉘 스크립트(deploy.sh) 라인 바이 라인 완전 분석",
        description: "새 버전을 띄우고 헬스 체크 후 Nginx를 스위칭한 뒤 구버전을 격하하는 리눅스 쉘 프로그래밍 코드를 해부합니다.",
        content: `
          <h3>1. 쉘 스크립트(Bash Script)의 존재 이유</h3>
          <p>Nginx 스위칭 배포를 매번 터미널 명령으로 한 땀 한 땀 사람이 실행한다면 그 역시 수동 배포나 다름없습니다. 서버 컴퓨터 리눅스 운영체제 안에서 이 일련의 논리 흐름을 판단하여 초고속 대행하도록 코딩한 일종의 매크로 명령어 모음이 <code>deploy.sh</code> 쉘 스크립트 파일입니다.</p>

          <h3>2. 실전 deploy.sh 전체 코드 템플릿</h3>
          <p>아래 배포 자동화 스크립트를 서버의 <code>/home/ubuntu/deploy.sh</code> 파일로 생성하고, 분석해 봅시다.</p>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">/home/ubuntu/deploy.sh (전체 코드 제공)</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('#!/bin/bash\n\n# 1. 현재 Nginx가 프록싱하고 있는 스프링 서버의 실제 활성 포트 탐색\nRESPONSE=$(curl -s http://localhost/api/products/health)\n\nif [ \&quot;$RESPONSE\&quot; = \&quot;UP\&quot; ]; then\n    # 현재 서비스가 정상 기동 중이면 Nginx가 가리키고 있을 타겟 포트 추적\n    # 여기서는 nginx.conf 혹은 service-url.inc 상태를 통해 포트 번호를 감지하거나 기본값 8081로 할당\n    # 실무 편의상 가동되고 있는 도커 컨테이너 포트 스캔\n    EXIST_8081=$(docker ps | grep app-8081)\n    if [ -n \&quot;$EXIST_8081\&quot; ]; then\n        CURRENT_PORT=8081\n        TARGET_PORT=8082\n    else\n        CURRENT_PORT=8082\n        TARGET_PORT=8081\n    fi\nelse\n    # 서버가 완전히 처음 구동되어 꺼져 있는 비상시라면 기본 타겟을 8081로 고정 가동\n    CURRENT_PORT=8082\n    TARGET_PORT=8081\nfi\n\necho \&quot;>> 현재 가동 중인 포트: $CURRENT_PORT\&quot;\necho \&quot;>> 새로운 버전 배포 타겟 포트: $TARGET_PORT\&quot;\n\n# 2. 신규 타겟 포트 명칭으로 스프링 컨테이너 기동\ndocker run -d -p $TARGET_PORT:8080 --name app-$TARGET_PORT [내계정]/spring-app:latest\n\n# 3. 신규 기동 WAS의 안정적인 메모리 로드(Warm-up) 헬스체크 검사\necho \&quot;>> 신규 서버 헬스체크 및 웜업 시작...\&quot;\nfor RETRY in {1..10}\ndo\n    STATUS_CODE=$(curl -s -o /dev/null -w \&quot;%{http_code}\&quot; http://localhost:$TARGET_PORT/api/products/health)\n    if [ \&quot;$STATUS_CODE\&quot; = \&quot;200\&quot; ]; then\n        echo \&quot;>> 헬스체크 성공! (HTTP Status: $STATUS_CODE)\&quot;\n        break\n    fi\n    echo \&quot;>> 대기 중... (3초 후 재시도)\&quot;\n    sleep 3\ndone\n\nif [ \&quot;$STATUS_CODE\&quot; != \&quot;200\&quot; ]; then\n    echo \&quot;>> 신규 서버 기동 실패로 배포를 중단하고 롤백합니다.\&quot;\n    docker stop app-$TARGET_PORT\n    docker rm app-$TARGET_PORT\n    exit 1\nfi\n\n# 4. Nginx의 포트 설정파일 덮어쓰기 교환\necho \&quot;set \\$service_url http://127.0.0.1:$TARGET_PORT;\&quot; | sudo tee /etc/nginx/conf.d/service-url.inc\n\n# 5. Nginx 재로드로 트래픽 즉시 우회 전환!\nsudo nginx -s reload\necho \&quot;>> Nginx 스위칭 완료\&quot;\n\n# 6. 이전 버전을 담당하던 노후 구버전 컨테이너 강제 중지 및 삭제 정리\necho \&quot;>> 구버전 컨테이너 app-$CURRENT_PORT 정리 중...\&quot;\ndocker stop app-$CURRENT_PORT\ndocker rm app-$CURRENT_PORT\n\necho \&quot;>> 배포가 다운타임 없이 안전하게 종료되었습니다!\&quot;')">Copy</button>
            </div>
            <div class="code-body">
              <pre><code>#!/bin/bash

# 1. 현재 Nginx가 프록싱하고 있는 스프링 서버의 실제 활성 포트 탐색
RESPONSE=\$(curl -s http://localhost/api/products/health)

if [ "\$RESPONSE" = "UP" ]; then
    # 현재 도커 목록을 검색해 실행 중인 컨테이너 포트 감지
    EXIST_8081=\$(docker ps | grep app-8081)
    if [ -n "\$EXIST_8081" ]; then
        CURRENT_PORT=8081
        TARGET_PORT=8082
    else
        CURRENT_PORT=8082
        TARGET_PORT=8081
    fi
else
    # 최초 배포 등으로 꺼져있다면 8081을 무조건 기동
    CURRENT_PORT=8082
    TARGET_PORT=8081
fi

echo ">> 현재 가동 포트: \$CURRENT_PORT -> 신규 배포 타겟: \$TARGET_PORT"

# 2. 신규 타겟 포트 명칭으로 신버전 스프링 컨테이너 가동
docker run -d -p \$TARGET_PORT:8080 --name app-\$TARGET_PORT [내도커계정]/spring-app:latest

# 3. 신규 기동 WAS의 완전한 부팅 대기용 헬스체크 폴링(10회 루프)
echo ">> 신규 서버 헬스체크 시작 (Target Port: \$TARGET_PORT)"
for RETRY in {1..10}
do
    # 헬스체크 주소에 통신을 쏴서 HTTP 응답코드 확인
    STATUS_CODE=\$(curl -s -o /dev/null -w "%{http_code}" http://localhost:\$TARGET_PORT/api/products/health)
    if [ "\$STATUS_CODE" = "200" ]; then
        echo ">> 헬스체크 성공! (HTTP Status: \$STATUS_CODE)"
        break
    fi
    echo ">> 서버가 아직 켜지는 중입니다... (3초 대기)"
    sleep 3
done

# 만약 10번(30초) 동안 톰캣이 뜨지 않는다면 버그 상황으로 판단하고 배포 강제 중단(Abort)
if [ "\$STATUS_CODE" != "200" ]; then
    echo ">> [배포실패] 신규 서버가 응답하지 않습니다. 컨테이너를 청소하고 철수합니다."
    docker stop app-\$TARGET_PORT
    docker rm app-\$TARGET_PORT
    exit 1
fi

# 4. Nginx의 포트 설정파일 덮어쓰기 교환
echo "set \\$service_url http://127.0.0.1:\$TARGET_PORT;" | sudo tee /etc/nginx/conf.d/service-url.inc

# 5. Nginx 재로드로 트래픽 즉시 우회 전환!
sudo nginx -s reload
echo ">> Nginx 트래픽 스위칭 완료!"

# 6. 이전 버전을 담당하던 노후 구버전 컨테이너 강제 중지 및 삭제 정리
echo ">> 구버전 컨테이너 app-\$CURRENT_PORT를 중지 및 삭제합니다."
docker stop app-\$CURRENT_PORT
docker rm app-\$CURRENT_PORT

echo ">> 배포가 다운타임 없이 안전하게 종결되었습니다! 🎉"</code></pre>
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
          question: "deploy.sh 스크립트 내에서 만약 헬스체크 HTTP 응답이 200번으로 통과되지 않았을 때, Nginx 재로드(reload)를 치지 않고 exit 1로 바로 탈출 철수시키는 이유는 무엇인가요?",
          options: [
            "자바 파일을 완전히 포맷하기 위해",
            "스프링 부트가 비정상(예: DB 설정 오타로 가동 예외 발생 등)으로 구동 실패한 상태인데 Nginx를 덜컥 연결해 버리면, 사용자가 사이트에 들어왔을 때 전면 에러 화면을 보며 장애 상황이 그대로 실시간 직격되어 퍼지게 되므로, 가동 실패를 감지해 배포를 긴급 차단(Abort)하고 이전 구버전을 안전하게 유지하기 위함",
            "도커 컨테이너 개수가 너무 늘어나서",
            "S3 버킷의 정적 웹호스팅 정책 요금 폭탄을 피하기 위해"
          ],
          correctIndex: 1,
          explanation: "헬스 체크 검증의 핵심 당위성입니다. 만약 톰캣 부팅 도중 오류가 발생해 작동 불능인 깡통 서버 상태인데 Nginx가 그리로 손님들을 밀어 넣어버리면 대형 장애가 납니다. 미완성 가동을 미리 격리 차단하고 구버전 서비스를 보존하는 것이 최고의 무중단 안전 조치입니다."
        }
      },
      {
        id: "7-4",
        title: "GitHub Actions 배포 자동화 yml 설정 파일 완벽 명세",
        description: "커밋 push 한 번에 원격 빌드, 도커 허브 업로드, EC2 쉘 연동까지 끝맺는 완성형 배포 스크립트를 작성합니다.",
        content: `
          <h3>1. 전체 자동화 파이프라인의 완성</h3>
          <p>내 로컬 컴퓨터의 개발 툴에서 비즈니스 패치 코딩을 끝마치고, git 명령으로 코드를 깃허브 원격 마스터 브랜치에 올리기만 하면 빌드부터 리눅스 배포 스크립트 원격 점화까지의 일련의 공정을 깃허브 로봇이 대행하도록 명세서를 구성합니다.</p>

          <h3>2. 실전 workflows/deploy.yml 전체 소스코드</h3>
          <p>프로젝트 폴더 내의 <code>.github/workflows/deploy.yml</code> 파일의 내용물로 아래 소스 코드를 그대로 삽입 및 작성합니다.</p>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">.github/workflows/deploy.yml</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('name: Deploy Pipeline\n\non:\n  push:\n    branches: [ master ]\n\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    \n    steps:\n    - name: Checkout Code\n      uses: actions/checkout@v3\n\n    - name: Set up JDK 17\n      uses: actions/setup-java@v3\n      with:\n        java-version: 17\n        distribution: temurin\n\n    - name: Build with Gradle\n      run: ./gradlew clean build -x test\n\n    - name: Log in to Docker Hub\n      uses: docker/login-action@v2\n      with:\n        username: \${{ secrets.DOCKER_USERNAME }}\n        password: \${{ secrets.DOCKER_PASSWORD }}\n\n    - name: Build and Push Docker Image\n      run: |\n        docker build -t \${{ secrets.DOCKER_USERNAME }}/spring-app:latest .\n        docker push \${{ secrets.DOCKER_USERNAME }}/spring-app:latest\n\n    - name: EC2 SSH Remote Command Execution\n      uses: appleboy/ssh-action@master\n      with:\n        host: \${{ secrets.EC2_HOST }}\n        username: ubuntu\n        key: \${{ secrets.EC2_KEY }}\n        script: |\n          docker pull \${{ secrets.DOCKER_USERNAME }}/spring-app:latest\n          ./deploy.sh')">Copy</button>
            </div>
            <div class="code-body">
              <pre><code>name: Deploy Pipeline

on:
  push:
    # master(혹은 main) 브랜치에 코드가 푸시되는 즉시 파이프라인 작동 시작
    branches: [ master ]

jobs:
  build-and-deploy:
    # 깃허브가 대여해 줄 클라우드 가상 러너 환경 지정
    runs-on: ubuntu-latest
    
    steps:
    # 1. 깃허브 저장소 상의 프로젝트 소스코드를 가상 러너로 체크아웃
    - name: Checkout Code
      uses: actions/checkout@v3

    # 2. 러너 머신에 JDK 17 컴파일 환경 자동 셋업
    - name: Set up JDK 17
      uses: actions/setup-java@v3
      with:
        java-version: '17'
        distribution: 'temurin'

    # 3. Gradle Wrapper를 가동하여 테스트 실행을 제외한 JAR 빌드 수행
    - name: Build with Gradle
      run: ./gradlew clean build -x test

    # 4. 도커 이미지 생성을 위한 도커 허브 로그인 과정 (Secrets 참조)
    - name: Log in to Docker Hub
      uses: docker/login-action@v2
      with:
        username: \${{ secrets.DOCKER_USERNAME }}
        password: \${{ secrets.DOCKER_PASSWORD }}

    # 5. JAR 파일을 도커 이미지로 구운 뒤, 도커 허브 저장소로 강제 푸시 업로드
    - name: Build and Push Docker Image
      run: |
        docker build -t \${{ secrets.DOCKER_USERNAME }}/spring-app:latest .
        docker push \${{ secrets.DOCKER_USERNAME }}/spring-app:latest

    # 6. 진짜 운영용 AWS EC2 컴퓨터에 보안 SSH 통신 접속하여 쉘 스크립트 실행 지시
    - name: EC2 SSH Remote Command Execution
      uses: appleboy/ssh-action@master
      with:
        host: \${{ secrets.EC2_HOST }}
        username: ubuntu
        key: \${{ secrets.EC2_KEY }}
        script: |
          # 서버 안으로 진입한 뒤, 방금 올린 최신 도커 이미지를 땡겨 받고
          docker pull \${{ secrets.DOCKER_USERNAME }}/spring-app:latest
          # 7-3에서 작성해 둔 무중단 쉘 스크립트를 관리자 권한 실행 점화!
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
        id: "7-5",
        title: "최종 배포 테스트 검증 및 상용 트러블슈팅 가이드",
        description: "실제 도메인으로 배포가 끝난 뒤, 브라우저가 정상 응답하는지 확인하고 주요 중단 요인을 점검합니다.",
        content: `
          <h3>1. 배포 중단 상태 실시간 추적 검증</h3>
          <p>배포 완료 후, 브라우저에서 사이트가 정상 노출되는지뿐 아니라 <strong>실제 무중단 교대 중단 시점 동안 정말 요청 소실(Downtime)이 없는지</strong> 1초에 한 번씩 호출을 쏘는 검증 cURL 루프를 돌려볼 수 있습니다.</p>

          <div class="code-container">
            <div class="code-header">
              <span class="code-filename">무중단 유효성 루프 cURL (로컬 PC 터미널에서 구동)</span>
              <button class="copy-btn" onClick="navigator.clipboard.writeText('while true; do curl -s --connect-timeout 2 http://내도메인/api/products/health; echo \&quot;\&quot;; sleep 1; done')">Copy</button>
            </div>
            <div class="code-body">
              <pre>while true; do curl -s --connect-timeout 2 http://[본인_도메인]/api/products/health; echo ""; sleep 1; done</pre>
            </div>
          </div>
          <p>이 상태에서 깃 push 배포를 전개해 봅니다. 중간에 한 번도 통신이 에러로 깨지지 않고 계속해서 <code>UP</code>을 1초마다 안정적으로 리포트한다면 무중단 배포를 완벽히 구축한 것입니다.</p>

          <h3>2. 노베이스 현업 초보자가 겪는 3대 배포 트러블슈팅</h3>
          
          <h4>1) Nginx가 502 Bad Gateway 에러를 뿜는 현상</h4>
          <ul>
            <li><strong>원인</strong>: Nginx 대문은 열렸으나, Nginx가 뒤쪽으로 전달해 줄 스프링 부트(Tomcat) 프로세스 자체가 실행되지 않고 죽어 있는 상태입니다.</li>
            <li><strong>해결책</strong>: 서버 SSH에 진입해 <code>docker ps -a</code>로 스프링 컨테이너가 죽었는지 보고, <code>docker logs app-8081</code>로 스프링 예외(DB 접속 정보 불일치, application.yml 들여쓰기 탭 오타 등)를 색출해 해결합니다.</li>
          </ul>

          <h4>2) Connection Refused 또는 무한 로딩 지연</h4>
          <ul>
            <li><strong>원인</strong>: 네트워크 포트 입구 차단 상태입니다.</li>
            <li><strong>해결책</strong>: AWS 보안 그룹 인바운드 편집창에 진입해 80(HTTP), 443(HTTPS) 규칙이 전 세계 대상(0.0.0.0/0)으로 정상 허용 추가되었는지 대조하고 저장합니다.</li>
          </ul>

          <h4>3) 쉘 스크립트 Permission Denied 거부 오류</h4>
          <ul>
            <li><strong>원인</strong>: 텍스트로 갓 작성된 쉘 스크립트 파일은 최초 리눅스 가동 권한이 차단되어 있습니다.</li>
            <li><strong>해결책</strong>: <code>chmod +x deploy.sh</code> 명령어를 주입하여 파일의 실행 플래그를 녹색 활성화시켜 준 뒤 재구동합니다.</li>
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
          explanation: "인프라 구축보다 중대한 것은 유지 보수 및 모니터링입니다. 배포 스크립트 실행 후 헬스 상태, 로그 흔적, cURL 응답 유지 상태를 검증 및 모니터링하여 예상치 못한 연결 유실을 즉시 인지하고 대처하는 습관이 필수적입니다."
        }
      }
    ]
  }
];
