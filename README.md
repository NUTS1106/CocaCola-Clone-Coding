# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

2024/07/17

navbar의 애니메이션과 UI 구현
::after 또는 ::before 등의 가상요소를 처음 써봄
trasition으로 transform에 애니메이션을 넣었을 때 원하지 않는 부분까지 애니메이션으로 만들어버려서 이 부분에서 어려움을 겪음
특히 hover시 나오는 언더바의 위치를 translateY를 통해서 이동하려는데 :not(:hover) 선택자 때문에 이것이 적용이 되지 않았고
이 사실을 모른 채로 왜 적용이 안되는지 한참 찾음...
navbar하나 구현하는데에 이렇게 많은 시간을 쓰는 것을 보니 아직도 많이 부족함.

2024/07/18

navbar 완성
확실히 아직 css를 이용한 구현에는 부족한 부분이 많음
navbar의 css를 작성하는 데에 과하게 많은 시간이 쓰임

2024/07/25

slider 구현과 불필요한 css 속성 제거
생각보다 내가 css의 flex를 너무 남발한다는 기분이 들어서 navbar의 flex들을 확인해보니 몇군데 제대로 css 구조를 이해하지 못한 채로
사용한 부분이 있었다 그래서 slider를 구현하면서는 flex의 불필요한 사용을 줄이기 위해 노력했다
slider를 구현하면서는 생각보다 어렵지 않았다 라이브러리를 사용하는 방법도 있었지만 라이브러리를 사용하더라도
원리를 알아야하지 않을까 싶어서 라이브러리 없이 구현해 보았다 무한 슬라이더도 아니였다보니 image를 길게 나열한 후, wrapper로 감싸서 overflow:hidden; 속성을 줘서 쉽게
구현할 수 있었다

2024/7/27

teaser 컴포넌트 구현
teaser 컴포넌트를 구현할 때 이미지와 컨텐츠 부분이 엇갈리게 배치를 시켜야 되는데 더 위쪽에 있는 요소의 끝부분이 아래쪽에 있는 요소의 끝부분에
자동으로 맞춰져서 이 문제 때문에 오랜시간을 썼는데 이 부분은 align-items 속성을 이용해서 해결할 수 있었다 위 문제가 발생하는 이유는 align-items의 기본값이
stretch여서 자동으로 위쪽의 있는 요소의 높이가 아래쪽의 요소의 끝부분에 맞춰 늘어나기 때문이였다 해당 속성의 값을 수직을 기준으로 요소를 맨위에 배치해주는 flex-start로
설정해주니 잘 작동하였다
