import { create } from 'zustand'
interface SidebarStore{
    show: boolean,// khai bao trang thai sidebar
    onExpand: ()=>void;
    onShow: ()=>void;
}
export const useSidebar = create<SidebarStore>((set)=>({
    show:false,
    onExpand: ()=> set(()=>({show: false})),
    onShow: ()=> set(()=>({show: true})),
}))