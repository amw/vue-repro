import { defineComponent as _defineComponent } from 'vue'
import { toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, unref as _unref } from "vue"

const _hoisted_1 = { key: 0 }
const _hoisted_2 = { key: 1 }

import { ref, Ref } from 'vue'


interface Titled {
  title: string
}



export default /*#__PURE__*/_defineComponent({
  setup(__props) {

function innerSetup() {
  return ref<Titled>()
}

const titled1 = ref<Titled>()
const titled2 = innerSetup() as Ref<Titled | undefined>


setTimeout(() => {
  titled1.value = {title: 'Chapter 1'}
  titled2.value = {title: 'Chapter 2'}
}, 3000)

return (_ctx: any,_cache: any) => {
  return (_openBlock(), _createElementBlock("div", null, [
    (titled1.value)
      ? (_openBlock(), _createElementBlock("h1", _hoisted_1, _toDisplayString(titled1.value.title), 1 /* TEXT */))
      : _createCommentVNode("v-if", true),
    (_unref(titled2))
      ? (_openBlock(), _createElementBlock("h1", _hoisted_2, _toDisplayString(_unref(titled2).title), 1 /* TEXT */))
      : _createCommentVNode("v-if", true)
  ]))
}
}

})