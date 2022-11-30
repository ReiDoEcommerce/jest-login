export function ToMoney(money: number | string, noIcon?: boolean, options?: { local: "en-GB", currency: "GBP", icon: "£" }) {
  return Number(money).toLocaleString(options?.local || "pt-BR", {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: options?.currency || 'BRL',
  }).replaceAll(noIcon ? options?.icon || "R$" : "", "");
}