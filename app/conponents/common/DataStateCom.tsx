import React from 'react';
import style from "@/modules/dataStateCom.module.css";
import { FaFaceSadTear } from 'react-icons/fa6';

interface Props {
  state: string
  noDataMent: string
}

/**
 * 데이터 로딩/없음 상태 표시용 컴포넌트
 * @param {string} state
 * @param {string} noDataMent
 */
const DataStateCom: React.FC<Props> = ({ state, noDataMent }) => {
  return (
    <div className={style.state_wrap}>
      {state === "loading" && <p>검색 중.. <br />잠시만 기다려주세요.</p>}
      {state === "no search" && <p>검색어가 없습니다.</p>}
      {state === "no data" && <p><FaFaceSadTear /><br />{noDataMent}</p>}
    </div>
  );
}

export default DataStateCom;
