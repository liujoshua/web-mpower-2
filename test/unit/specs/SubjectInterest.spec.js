import Vue from 'vue'
import SubjectInterest from '@/components/SubjectInterest'

describe('SubjectInterest.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(SubjectInterest)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.page-overview div').textContent.trim())
      .to.equal('I\'m interested in joining the mPower study because I')
  })
})
