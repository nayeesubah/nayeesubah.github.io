import { ref, onMounted, onUnmounted } from 'vue'

// by convention, composable function names start with "use"
export function useHandleSCroll(target, event) {
    // console.log('you are inside composable')
    let isScrolled = ref(false)
    function handleSCroll(event) {
        if (window.scrollY > 100) {
            isScrolled.value = true;
        }else{
            isScrolled.value = false;
        }
    }
    // if you want, you can also make this
    // support selector strings as target
    onMounted(() => target.addEventListener(event, handleSCroll));
    onUnmounted(() => target.removeEventListener(event, handleSCroll));

  return isScrolled;
}
