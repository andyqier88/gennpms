import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import commonjs from '@rollup/plugin-commonjs'
import visualizer from 'rollup-plugin-visualizer'

console.log('Process', process.argv[process.argv.length-1]);
const argvType = process.argv[process.argv.length-1]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    //添加jsx/tsx支持
    vueJsx({}),

    //解决引入commonjs模块后打包出现的{'default' is not exported by XXX}错误!!
    commonjs({requireReturnsDefault: true}),  

    //可视化Bundle
    visualizer(),
  ],

  resolve: {
    alias: {
        "@": resolve(__dirname, 'src'), // 路径别名
    },
    extensions: ['.js', '.vue', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己 增减
  },


  build: {
    //minify: false, //
    lib: {
      entry: resolve(__dirname, `install-${argvType}-render.js`),
      name: `${argvType}Render`,
      fileName: (format) => `render-${argvType}.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        dir: `dist/${argvType}`,
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          // 'element-plus': 'ElementPlus',
        }
      }
    }
  }
  
})
