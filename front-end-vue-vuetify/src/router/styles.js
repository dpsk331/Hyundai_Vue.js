import Spacing from '@/views/styles/Spacing.vue';

export default [
  {
    path: "/styles/textandtypography",
    component: () => import(/* webpackChunkName: "styles" */ '../views/styles/TextAndTypography.vue')
  },
  {
    path: "/styles/spacing",
    component: Spacing //지연로딩을 하지 않고 바로 다운로드 되기 때문에 가급적이면 해당 방식은 사용하지 않는 것이 좋다.
  }
]