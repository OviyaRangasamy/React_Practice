import React from 'react'
import ReactDOM from 'react-dom/client'
import ParentComponent from '../Memo/parentComponent'
import { Parent } from '../treeTrial/parentNode'
import { UCBParentComponent } from '../UseCallBack/useCallBackExample1'
import { UseEffectProductFilter } from '../UseMemo Filter/useEffectProductFilter'
import ProductFilter from '../UseMemo Filter/useMemoFilter'
import { UseMemoProductFilter } from '../UseMemo Filter/useMemoFilterCompare'
import { Day13AsyncExampleGood } from '../UseMemo Filter/useMemoFilterSolution'
import LoopUpToMemo from '../useMemo/example1'
import Forms from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
 <>
 {/* <Forms/> */}
 {/* <Parent/> */}
 {/* <ParentComponent/> */}
 {/* <LoopUpToMemo/> */}
 {/* <ProductFilter/> */}
 {/* <Day13AsyncExampleBad/> */}
 {/* <Day13AsyncExampleGood/> */}
 {/* <UseEffectProductFilter/> */}
 <UseMemoProductFilter/>
 {/* <UCBParentComponent/> */}
 </>
)
