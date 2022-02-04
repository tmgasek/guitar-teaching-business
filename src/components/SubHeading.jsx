/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const SubHeading = ({ title }) => (
  <div>
    <h4
      css={css`
        color: var(--color-white);
        font-size: larger;
        font-weight: 400;
      `}
    >
      {title}
    </h4>
    {/* add a cool small guitar underline svg */}
    <img
      css={css`
        width: 60px;
        margin: 0;
      `}
      src="/assets/guitar-sh.svg"
      alt="guitar"
    />
  </div>
);

export default SubHeading;
