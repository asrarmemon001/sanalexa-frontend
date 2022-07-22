import React, { useState } from "react";
const PersonalityProfile = ({ personalityProfile }) => {
  const [data, setData] = useState([
    {
      traits: "Openess",
      low: "Practical",
      rating: "3",
      high: "Imaginative",
    },
    {
      traits: "Conscientiousness",
      low: "Unreliable",
      rating: "3",
      high: "Organised",
    },
    {
      traits: "Exrtaversion",
      low: "Reserved",
      rating: "3",
      high: "Lively",
    },
    {
      traits: "Agreeableness",
      low: "Irritable",
      rating: "3",
      high: "Helpful",
    },
    {
      traits: "Neuroticism",
      low: "Calm",
      rating: "6",
      high: "Insecure",
    },
    {
      traits: "Empathy",
      low: "Insensitive",
      rating: "4",
      high: "Generous",
    },
  ]);
  return (
    <div className="col-md-12">
      <div className="card borderred my-4">
        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
          <div className="bg-danger px-3 shadow-danger border-radiusus pt-4 pb-3">
            <div className="row">
              <div className="col-12">
                <h6 className="text-white text-capitalize px-3 d-flex align-items-center">
                  Personality Profile
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body px-4 pb-2">
          <div className="table-responsive p-0 text-center">
            <table className="table align-items-center mb-0 table-bordered">
              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 text-start">
                    Traits
                  </th>
                  <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2">
                    Low
                  </th>
                  <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                    1
                  </th>
                  <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                    2
                  </th>
                  <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                    3
                  </th>
                  <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                    4
                  </th>
                  <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                    5
                  </th>
                  <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                    6
                  </th>
                  <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                    7
                  </th>
                  <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                    8
                  </th>
                  <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                    9
                  </th>
                  <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                    10
                  </th>
                  <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                    High
                  </th>
                </tr>
              </thead>
              <tbody>
                {personalityProfile?.map((el, i) => {
                  return (
                    <tr key={el.traits}>
                      <td>
                        <div className="d-flex text-sm px-3 py-1 text-start font-weight-bold">
                          {el.traits}
                        </div>
                      </td>
                      <td>
                        <p className="text-sm font-weight-bold mb-0">
                          {el.low}
                        </p>
                      </td>
                      <td>
                        {el.value == 1 ? (
                          <div className="d-flex justify-content-center align-items-center">
                            <span
                              className="round bg-success border"
                              style={{
                                width: 22,
                                height: 22,
                                borderRadius: "50%",
                              }}
                            ></span>
                          </div>
                        ) : null}
                      </td>
                      <td>
                        {el.value == 2 ? (
                          <div className="d-flex justify-content-center align-items-center">
                            <span
                              className="round bg-success border"
                              style={{
                                width: 22,
                                height: 22,
                                borderRadius: "50%",
                              }}
                            ></span>
                          </div>
                        ) : null}
                      </td>
                      <td>
                        {el.value == 3 ? (
                          <div className="d-flex justify-content-center align-items-center">
                            <span
                              className="round bg-success border"
                              style={{
                                width: 22,
                                height: 22,
                                borderRadius: "50%",
                              }}
                            ></span>
                          </div>
                        ) : null}
                      </td>
                      <td>
                        {el.value == 4 ? (
                          <div className="d-flex justify-content-center align-items-center">
                            <span
                              className="round bg-success border"
                              style={{
                                width: 22,
                                height: 22,
                                borderRadius: "50%",
                              }}
                            ></span>
                          </div>
                        ) : null}
                      </td>
                      <td>
                        {el.value == 5 ? (
                          <div className="d-flex justify-content-center align-items-center">
                            <span
                              className="round bg-success border"
                              style={{
                                width: 22,
                                height: 22,
                                borderRadius: "50%",
                              }}
                            ></span>
                          </div>
                        ) : null}
                      </td>
                      <td>
                        {el.value == 6 ? (
                          <div className="d-flex justify-content-center align-items-center">
                            <span
                              className="round bg-success border"
                              style={{
                                width: 22,
                                height: 22,
                                borderRadius: "50%",
                              }}
                            ></span>
                          </div>
                        ) : null}
                      </td>
                      <td>
                        {el.value == 7 ? (
                          <div className="d-flex justify-content-center align-items-center">
                            <span
                              className="round bg-success border"
                              style={{
                                width: 22,
                                height: 22,
                                borderRadius: "50%",
                              }}
                            ></span>
                          </div>
                        ) : null}
                      </td>
                      <td>
                        {el.value == 8 ? (
                          <div className="d-flex justify-content-center align-items-center">
                            <span
                              className="round bg-success border"
                              style={{
                                width: 22,
                                height: 22,
                                borderRadius: "50%",
                              }}
                            ></span>
                          </div>
                        ) : null}
                      </td>
                      <td>
                        {el.value == 9 ? (
                          <div className="d-flex justify-content-center align-items-center">
                            <span
                              className="round bg-success border"
                              style={{
                                width: 22,
                                height: 22,
                                borderRadius: "50%",
                              }}
                            ></span>
                          </div>
                        ) : null}
                      </td>
                      <td>
                        {el.value == 10 ? (
                          <div className="d-flex justify-content-center align-items-center">
                            <span
                              className="round bg-success border"
                              style={{
                                width: 22,
                                height: 22,
                                borderRadius: "50%",
                              }}
                            ></span>
                          </div>
                        ) : null}
                      </td>
                      <td className="align-middle text-center text-sm">
                        <p className="text-sm font-weight-bold mb-0">
                          {el.high}
                        </p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-footer border-top">
          <span className="text-bolder">Note:</span> This chart gives the
          personality profile of a user across the above mentioned traits.
        </div>
      </div>
    </div>
  );
};
export default PersonalityProfile;
