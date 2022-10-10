import Cookie from "js-cookie"
export default {
    state:{
        siCollapse:false,
        tabsList:[
            {
                path:'/hoMe',
                name:'hoMe',
                label:'首页',
                icon:'home'
            }
        ],
        curretMenu:null,
        menu:[]
    },
    mutations:{
        collapse(state){
            state.siCollapse=!state.siCollapse
        },
        selectMenu(state,val){
            if(val.name!=='hoMe'){
                state.curretMenu=val
                const result=state.tabsList.findIndex(item=> item.name === val.name)
                if(result===-1){
                    state.tabsList.push(val)
                }
            }else{
                state.curretMenu=null
            }
        },
        closeTag(state,val){
            const result=state.tabsList.findIndex(time=>time.name===val.name)
            state.tabsList.splice(result,1)
        },
        setMenu(state,val){
            state.menu=val
            Cookie.set('menu',JSON.stringify(val))
        },
        clearMenu(state){
            state.menu=[]
            Cookie.remove('menu')
        },
        addMenu(state,router){
            if(!Cookie.get('menu')){
                return
            }
            const menu =JSON.parse(Cookie.get('menu'))
            state.menu=menu
            const menuArray=[]
            menu.forEach(item => {
                if(item.children){
                    item.children=item.children.map(item=>{
                        item.component=()=>import(`../src/views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                }else{
                    item.component=()=>import(`../src/views/${item.url}`)
                    menuArray.push(item)
                }
            });
            menuArray.forEach((item)=>{
                router.addRoute(('Main',item))
            })
        }
    }
}