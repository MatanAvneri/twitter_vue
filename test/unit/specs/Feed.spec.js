import Vue from 'vue'
import Feed from '@/components/Feed'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Feed)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.feed__header').textContent)
      .toEqual('Welcome to (not) twitter!')
  })
})
