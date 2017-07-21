import Vue from 'vue'
import PrivacyPolicy from '@/components/PrivacyPolicy'

describe('PrivacyPolicy.vue', () => {
  describe('should render markdown', () => {
    const Constructor = Vue.extend(PrivacyPolicy)
    const vm = new Constructor().$mount()
    it('with privacy policy heading', () => {
      expect(vm.$el.querySelector('h1').textContent.trim())
        .to.equal('Privacy Policy')
    })
    describe('with subheading', () => {
      var headings = vm.$el.querySelectorAll('h2')
      it('Information We Collect', () => {
        expect(headings[0].textContent.trim()).to.equal('Information We Collect')
      })
      it('How We Use Information', () => {
        expect(headings[1].textContent.trim()).to.equal('How We Use Information')
      })
    })
  })
})
