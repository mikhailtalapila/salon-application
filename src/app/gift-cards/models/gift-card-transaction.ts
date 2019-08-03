import { IGiftCard } from './gift-card';

export class IGiftCardTransaction {
    id: number;
    transactionDate: Date;
    giftCardId: number;
    amountUsed: number;
    transactionNote: string;
    giftCard: IGiftCard;
}