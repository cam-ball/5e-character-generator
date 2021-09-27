import React from 'react'
import Interface from './Interface'
import { useQuery, gql } from '@apollo/client';

const QueryInterface = () => {
  const SRD_QUERY = gql`
    {
      races {
        name
      }
      classes {
        name
      }
    }
  `;

  const { data } = useQuery(SRD_QUERY);

  if (data) {
    return (<Interface srdData={data}/>);
  } else {
    return (<p> Crunchatizing </p>);
  }
}

export default QueryInterface;
