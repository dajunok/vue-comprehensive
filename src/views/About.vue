<template>
  <div class="about">
    <h1>This is an about page</h1>
    <my-component></my-component>
  </div>
</template>


<script type="text/javascript">

export default{
    components:{
        //动态按需加载vue组件，并指定chunk名称
        'my-component': r => require.ensure([], () => r(require('@/components/myasynccomponent.vue')), 'group'), 
    },
}
</script>
