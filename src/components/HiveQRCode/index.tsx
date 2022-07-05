import { Operation } from "@hiveio/dhive";
import { encodeOp, encodeOps } from "hive-uri";
import React from "react";
import { QRCode } from "react-qrcode-logo";

type Op = {
  ops?: never;
  op: Operation;
};

type Ops = {
  op?: never;
  ops: Operation[];
};

type Props = {
  withLogo?: boolean;
} & (Op | Ops);

const HiveQRCode = ({ ops, op, withLogo = false }: Props) => {
  let value = "";
  if (ops) {
    value = encodeOps(ops);
  } else if (op) {
    value = encodeOp(op);
  }
  return <QRCode value={value} />;
};

export default HiveQRCode;
