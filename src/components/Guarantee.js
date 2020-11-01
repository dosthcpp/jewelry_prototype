import React from "react";
import { useEffect } from "react";
import QRCode from "qrcode.react";

const GuaranteeWindow = () => {
  const gInfo = JSON.parse(localStorage.getItem("gInfo"))[0];
  useEffect(() => {
    console.log(gInfo);
  });
  const {
    stockNo,
    condition,
    brand,
    remark,
    model,
    serialNo,
    movement,
    material,
    sellerInfo,
    createdAt,
  } = gInfo;
  const [년, 월, 일] = createdAt.split("T")[0].split("-");
  return (
    <div className="guarantee-form">
      <div className="guarantee-form__title">ATLAS 모바일 보증서</div>
      <div className="guarantee-form__address-area">
        <div>서울특별시 종로구 청계천로 11</div>
        <div>
          <span>T: +82 02-0000-0000</span>
          <span>F: 001-82-000 000-000</span>
        </div>
        <div>Contact: contact@atlas.tech</div>
        <span className="emphasis">ATLAS co., Ltd.</span>
        <span className="text-align-right">www.atlas.tech</span>
      </div>
      <div className="guarantee-form__table">
        <div className="guarantee-form__table-header">
          <span className="guarantee-form__table-title">보증 정보</span>
          <span className="guarantee-form__table-createdAt">{`${년}년 ${월}월 ${일}일`}</span>
        </div>
        <div className="guarantee-form__table-stockNo">
          <span className="guarantee-form__table-stockNo-1">Stock No.</span>
          <span className="guarantee-form__table-stockNo-2">{stockNo}</span>
        </div>
        <div className="guarantee-form__table-condition">
          <span className="guarantee-form__table-condition-1">제품 컨디션</span>
          <span className="guarantee-form__table-condition-2">{condition}</span>
        </div>
        <div className="guarantee-form__table-brand">
          <span className="guarantee-form__table-brand-1">브랜드</span>
          <span className="guarantee-form__table-brand-2">{brand}</span>
        </div>
        <div className="guarantee-form__table-model">
          <span className="guarantee-form__table-model-1">모델</span>
          <span className="guarantee-form__table-model-2">{model}</span>
        </div>
        <div className="guarantee-form__table-serial">
          <span className="guarantee-form__table-serial-1">시리얼</span>
          <span className="guarantee-form__table-serial-2">{serialNo}</span>
        </div>
        <div className="guarantee-form__table-movement">
          <span className="guarantee-form__table-movement-1">무브먼트</span>
          <span className="guarantee-form__table-movement-2">{movement}</span>
        </div>
        <div className="guarantee-form__table-material">
          <span className="guarantee-form__table-material-1">재질</span>
          <span className="guarantee-form__table-material-2">{material}</span>
        </div>
        <div className="guarantee-form__table-remark">
          <span className="guarantee-form__table-remark-1">비고</span>
          <span className="guarantee-form__table-remark-2">{remark}</span>
        </div>
        <div className="guarantee-form__table-sellerInfo">
          <div className="guarantee-form__table-sellerInfo-1">
            <span className="wrapper">판매자 정보</span>
          </div>

          <div className="guarantee-form__table-sellerInfo-spec">
            <div className="guarantee-form__table-sellerInfo-2">
              {sellerInfo[0].title}
            </div>
            <div className="guarantee-form__table-sellerInfo-3">
              {`T: ${sellerInfo[0].tel} Contact:`}
              <span className="_email">{`${sellerInfo[0].contact}`}</span>
            </div>
            <div className="guarantee-form__table-sellerInfo-4">
              {sellerInfo[0].address}
            </div>
            <div className="guarantee-form__table-sellerInfo-5">
              {sellerInfo[0].url}
            </div>
          </div>
        </div>
      </div>
      <div className="guarantee-form__caution">
        <div>
          <div className="guarantee-form__caution-title-1">
            <span>
              <img
                src={require(`${__dirname}/../static/caution-sign.png`)}
                alt="caution_sign"
              />
            </span>
            표준 보증규정{" "}
            <span className="font-small">
              &#8251;보증기한은 판매일로부터 무상으로 _____동안 수리를
              보증합니다.
            </span>
          </div>
          <div>
            &middot;보증기간 내에 정상적인 사용 중 자체결함이 발생한 경우에는
            무료 수리가 가능합니다.
          </div>
          <div>
            (단, 수리 시 일부 대체 부품을 사용하는 경우가 발생할 수 있습니다.)
          </div>
          <div>
            &middot;보증서를 분실한 경우 구입처 또는 (주)ATLAS로 문의 주시면
            재발행을 도와드리며, 양도한 경우에는 보증이 무효 처리됩니다.
          </div>
          <div>
            &middot;보증기간 내에 고객이 당사에서 불필요하다고 인정되는 수리를
            요구해서 발생한 수리비와 보증기간이 경과하여 발생한 모든 수리비용은
            고객이 부담합니다.
          </div>
          <div>
            &middot;다음과 같은 경우에는 보증기간 내라도 보증 대상에서
            제외됩니다.
          </div>
          <div>✓수리 기술자가 품질 및 기능상에 문제가 없다고 판단하는 경우</div>
          <div>✓부적합한 수리 또는 개조로 인한 고장이나 손상</div>
          <div>✓사용 중에 발생하는 외관상의 변화(변색, 부식 등)</div>
          <div>✓기기 내부에 수분이나 이물질이 들어가서 생긴 고장</div>
          <div>✓부주의나 부적합한 사용에 의한 고장이나 손상</div>
        </div>
        <div>
          <div className="guarantee-form__caution-title-2">
            <span>
              <img
                src={require(`${__dirname}/../static/caution-sign.png`)}
                alt="caution_sign"
              />
            </span>
            표준 반품규정
          </div>
          <div>
            &middot;매장에서 구매하신 경우 고객이 제품을 확인하신 후 구매하신
            것이며, 제품의 특정상 반품은 접수되지 않으니 주의해주십시오.
          </div>
          <div>
            &middot;온라인으로 구매하신 경우 제품의 반품은 구입 후 2~3일 이내에
            미사용 상태로 반품 접수해야 합니다. 다만, 신상품의 경우 고객의
            일방적인 변심, 조정, 흠집, 이물질 등 사용 흔적이 발견될 시 반품
            접수가 불가능합니다.
          </div>
          <div>
            &middot;반품이 되지 않는 제품은 매입이 가능하니 참고하여 주십시오.
          </div>
        </div>
      </div>
      <div className="guarantee-form__footer">
        <div className="guarantee-form__footer-1">
          <span>해당 보증서는 (주)ATLAS와 판매자가 보증합니다.</span>
        </div>
        <div className="guarantee-form__footer-2">
          <span className="guarantee-form__footer-2-1">보증서 번호</span>
          <span className="guarantee-form__footer-2-2">10794821R01</span>
        </div>
        <div className="guarantee-form__footer-3">
          <span className="guarantee-form__footer-3-1">발행 일자</span>
          <span className="guarantee-form__footer-3-2">{`${년}년 ${월}월 ${일}일`}</span>
        </div>
        <div className="guarantee-form__footer-4">
          <span className="guarantee-form__footer-4-1">판매자 서명</span>
          <span className="guarantee-form__footer-4-2">
            ___________________________________
          </span>
        </div>
      </div>
      <div className="guarantee-form__qrcode">
        <QRCode
          value={"https://www.example.com"}
          size={64}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"L"}
          includeMargin={false}
          renderAs={"canvas"}
        />
      </div>
    </div>
  );
};

export default GuaranteeWindow;
