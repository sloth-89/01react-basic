import React, { useCallback, useState } from "react";
import Light from "./Light";


function SmartHome(){

    const [masterOn, setMasterOn] = useState(false)
    const [kichenOn, setKichenOn] = useState(false)
    const [bathOn, setBathOn] = useState(false)

    // 방법2. useCallback과 React.memo - 최적화
    // 침실버튼 클릭 시 침실관련 컴포넌트만 동자하도록하고 콘솔창에서 확인가능
    const toggleMaster = useCallback(() => {setMasterOn(!masterOn)}, [masterOn])
    const toggleKichen = useCallback(() => {setKichenOn(!kichenOn)}, [kichenOn])
    const toggleBath = useCallback(() => {setBathOn(!bathOn)}, [bathOn])

    // 방법1.
    // useCallback과 React.memo를 사용하지 않을 경우의 코드는 하단과 같다.
    // 브라우저의 콘솔탭에서 침실버튼을 클릭하면 주방, 욕실까지 불필요한 코드가 동작하기 때문에
    // 상단의 useCallback과 React.memo를 통해 관련 함수만 랜더링 되도록 최적화 한다.
    // const toggleMaster = () => {setMasterOn(!masterOn)}
    // const toggleKichen = () => {setKichenOn(!kichenOn)}
    // const toggleBath = () => {setBathOn(!bathOn)}

    return(
        <div>
            <Light room="침실" on={masterOn} toggle={toggleMaster}></Light>
            <Light room="주방" on={kichenOn} toggle={toggleKichen}></Light>
            <Light room="욕실" on={bathOn} toggle={toggleBath}></Light>
        </div>
    )
}

export default SmartHome;