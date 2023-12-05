## 프로젝트 구조 보고서

### 1. `core` 디렉토리

```plaintext
core/
│
├── adaptor/
│   ├── endpoints/
│   │   └── /* 엔드포인트 파일들 */
│   │
│   └── fake-dev-endpoints/
│       └── /* 가짜 엔드포인트 파일들 */
│
├── application/
│   ├── services/
│   │   └── /* 서비스 관련 파일들 */
│   │
│   └── usecases/
│       └── /* 유즈케이스 관련 파일들 */
│
├── domain/
│   ├── entities/
│   │   └── /* 엔티티 파일들 */
│   │
│   ├── enums.ts
│   ├── types.ts
│   │
│   └── valueObjects/
│       └── /* 값 객체 파일들 */
│
├── setting.json
│
└── utils/
    └── /* 유틸리티 함수 파일들 */
```

### 2. `lib` 디렉토리

```plaintext
src/lib/
│
├── axios/
│   ├── RequestManager.ts
│   └── requests/
│       └── auth.ts
│
├── intl/
│   ├── LanguageManager.ts
│   └── languages/
│       ├── en.json
│       ├── ja.json
│       └── ko.json
│
├── react-redux/
│   ├── StoreManager.ts
│   └── slices/
│       └── LoginPageUseCaseSlice.ts
│
├── react-router-dom/
│   ├── AppRouters.tsx
│   ├── components/
│   │   ├── ErrorBoundary.tsx
│   │   └── Suspense.tsx
│   └── helpers/
│       ├── retryComponent.ts
│       └── useScrollBehavior.ts
│
└── styled-components/
    ├── StyleManager.ts
    ├── components/
    │   ├── Box.tsx
    │   ├── Exception.tsx
    │   ├── Layout.tsx
    │   └── Loader.tsx
    ├── hooks/
    └── styledComponent.d.ts
```

#### Manager 클래스

`lib` 디렉토리의 `Manager` 클래스는 외부 라이브러리나 모듈을 관리하고 중재하는 역할을 수행합니다. 각 라이브러리의 초기화, 설정, 통합 등을 담당하며, 중요한 역할을 수행합니다.

##### `RequestManager.ts` 파일 설명

```typescript
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export default class RequestManager {
  // 상수
  public static get DEFAULT_REQUEST_OPTS() {
    // ...
  }

  // 시스템 - 요청 인스턴스 생성
  public static create<Req extends AxiosRequestConfig, Res>(config: Req): Promise<AxiosResponse<Res, any>> {
    // ...
  }

  // 인터셉터
  public static onReqSuccessInterceptor(req: InternalAxiosRequestConfig<any>) {
    // ...
  }
  // ... (각각의 인터셉터 메서드)
}
```

##### `RequestManager` 사용 예시

```typescript
import RequestManager from '../RequestManager'
// ... (인터페이스 등의 import)

export const reqPostLogin = (data: IReqPostLogin['data']) => {
  // ...
}

// ... (각각의 요청 함수)
```

### 3. `view` 디렉토리

라우터에서 지정된 페이지 단위를 기반으로 디렉토리를 구성합니다. 주로 사용자 인터페이스를 구성하는데 필요한 컴포넌트들이 위치하며, 페이지 단위로 구분하여 관리합니다.

```plaintext
view/
│
├── /* 라우터에서 지정된 페이지 단위 디렉토리 */
└── /* 페이지를 구성하는 컴포넌트 파일들 */
```

위와 같이 디렉토리에 대한 추가 설명과 함께 해당 디렉토리의 파일 구조를 나타내었습니다. 더 필요한 정보가 있나요?

```

```
