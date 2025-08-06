

import React from 'react';
import Count from '../common/Count';


interface DataType {
  id: number;
  title: string;
  number: number;
}[]

const counter_data: DataType[] = [
  {
    id: 1,
    title: "Projects Delivered",
    number: 91,
  },
  {
    id: 2,
    title: "Clients Served",
    number: 18, // use a believable small-to-mid number
  },
  {
    id: 3,
    title: "Team Experience (Years)",
    number: 21, // if combined team experience is 21+ years, this works
  },
  {
    id: 4,
    title: "Industries Served",
    number: 10,
  }
]


const FunFactHomeOne = ({style_2, style_3} :any) => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          {counter_data.map((item, i) =>
            <div key={i} className="col-lg-3">
              <div className="cs_funfact cs_style1">
                <div className={`cs_funfact_number  me-4 ${style_2 ? 'cs_stroke_normal' : 'cs_stroke_text'}`}>
                  <div className="amin_auto_count">
                    <Count number={item.number} add_style={true} />
                  </div>
                  {i === 0 && <span></span>}
                  {i === 1 && <span></span>}
                </div>
                <div className={`cs_funfact_text cs_primary_font ${style_2 ? 'cs_color_1' : ''}`}>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {style_3? null :  <div className="cs_height_150 cs_height_lg_60"></div>}     
    </>
  );
};

export default FunFactHomeOne;