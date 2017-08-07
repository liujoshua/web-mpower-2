// import Vue from 'vue'
// import SubjectInterest from '@/components/SubjectInterest'

// describe('SubjectInterest.vue', () => {
//   it('should render correct contents', () => {
//     const Constructor = Vue.extend(SubjectInterest)
//     const vm = new Constructor().$mount()
//     expect(vm.$el.querySelector('.page-overview p').textContent.trim())
//       .to.equal('I\'m interested in joining the mPower study because I')
//   })
//   describe('interest reason option', () =>
//     it('should show willingness option', done => {
//       const Constructor = Vue.extend(SubjectInterest)
//       const vm = new Constructor().$mount()

//       expect(vm.$el.querySelector('#selectTwo')).to.equal(null)

//       vm.selectedOptionOne = 'have parkinsons'

//       Vue.nextTick(() => {
//         expect(vm.$el.querySelector('#selectTwo')).to.not.equal(null)
//         done()
//       })
//     })
//   )
//   describe('willing to try the study option one', () =>
//     it('should show this study option', done => {
//       const Constructor = Vue.extend(SubjectInterest)
//       const vm = new Constructor().$mount()
//       vm.selectedOptionOne = 'have parkinsons'

//       Vue.nextTick(() => {
//         setTimeout(function () {
//           expect(vm.$el.querySelector('#selectTwo').textContent.trim())
//             .to.equal('Please select one  this study   parts of this study')
//           // expect(vm.$el.querySelector('#selectTwo')).toBeFocused() if we import jasmine then we can expand testing for functions like this
//           done()
//         })
//       })
//     }
//     ))
// })
