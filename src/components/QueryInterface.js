import React from 'react'
import Wizard from './Wizard'
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
      alignments {
        name
      }
    }
  `;

  const { data } = useQuery(SRD_QUERY);

  if (data) {
    return (<Wizard srdData={data}/>);
  } else {
    return (<p> Crunchatizing </p>);
  }
}

export default QueryInterface;
