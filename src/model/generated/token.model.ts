import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Owner} from "./owner.model"
import {Transfer} from "./transfer.model"
import {GoodContract} from "./goodContract.model"

@Entity_()
export class Token {
    constructor(props?: Partial<Token>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Owner, {nullable: true})
    owner!: Owner | undefined | null

    @Column_("text", {nullable: true})
    name!: string | undefined | null

    @Column_("text", {nullable: true})
    imageURI!: string | undefined | null

    @Column_("text", {nullable: true})
    uri!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    expires!: bigint | undefined | null

    @OneToMany_(() => Transfer, e => e.token)
    transfers!: Transfer[]

    @Index_()
    @ManyToOne_(() => GoodContract, {nullable: true})
    contract!: GoodContract | undefined | null
}
