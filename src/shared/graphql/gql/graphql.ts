/* eslint-disable */
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
   [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
   [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
   [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
   T extends { [key: string]: unknown },
   K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
   | T
   | {
        [P in keyof T]?: P extends ' $fragmentName' | '__typename'
           ? T[P]
           : never
     }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
   ID: { input: string; output: string }
   String: { input: string; output: string }
   Boolean: { input: boolean; output: boolean }
   Int: { input: number; output: number }
   Float: { input: number; output: number }
   DateTime: { input: any; output: any }
   Html: { input: any; output: any }
   PageNumber: { input: any; output: any }
   PageSize: { input: any; output: any }
   UInt: { input: any; output: any }
   Upload: { input: any; output: any }
   Url: { input: any; output: any }
   Uuid: { input: any; output: any }
}

export type AllCandlesOk = {
   __typename?: 'AllCandlesOk'
   candles: Array<Candles>
   totalCount: TotalCountResolvingResult
}

export type AllCandlesOkTotalCountArgs = {
   estimate?: Scalars['UInt']['input']
}

export type AllCategoryResult =
   | AllCandlesOk
   | InternalErrorProblem
   | VersionMismatchProblem

export type AllColorOk = {
   __typename?: 'AllColorOk'
   colors: Array<Color>
}

export type AllColorResult =
   | AllColorOk
   | InternalErrorProblem
   | VersionMismatchProblem

export type AllOrdersOk = {
   __typename?: 'AllOrdersOk'
   orders: Array<Orders>
}

export type AllOrdersResult =
   | AllOrdersOk
   | InternalErrorProblem
   | UnauthorizedProblem

export type AllUserOrdersOk = {
   __typename?: 'AllUserOrdersOk'
   orders: Array<Orders>
}

export type AllUserOrdersResult =
   | AllUserOrdersOk
   | InternalErrorProblem
   | UnauthorizedProblem

export type AuthMutations = {
   __typename?: 'AuthMutations'
   deleteToken?: Maybe<DeleteTokensResult>
   login: LoginResult
   newTokens: NewTokensResult
   registrations: RegistrationsResult
}

export type AuthMutationsLoginArgs = {
   input: LoginInput
}

export type AuthMutationsRegistrationsArgs = {
   input: RegistrationsInput
}

export type Candles = {
   __typename?: 'Candles'
   category_id: Scalars['Uuid']['output']
   color_id: Scalars['Uuid']['output']
   created_at: Scalars['DateTime']['output']
   description: Scalars['String']['output']
   id: Scalars['Uuid']['output']
   images: Array<Scalars['String']['output']>
   price: Scalars['Int']['output']
   slug: Scalars['String']['output']
   title: Scalars['String']['output']
   updated_at: Scalars['DateTime']['output']
   version: Scalars['UInt']['output']
   weight: Scalars['Int']['output']
}

export type CandlesByIdInput = {
   id: Scalars['Uuid']['input']
}

export type CandlesByIdOk = {
   __typename?: 'CandlesByIdOk'
   candle: Candles
}

export type CandlesByIdResult =
   | CandlesByIdOk
   | InternalErrorProblem
   | VersionMismatchProblem

export type CandlesBySlugInput = {
   slug: Scalars['String']['input']
}

export type CandlesBySlugOk = {
   __typename?: 'CandlesBySlugOk'
   candle: Candles
}

export type CandlesBySlugResult =
   | CandlesBySlugOk
   | InternalErrorProblem
   | VersionMismatchProblem

export type CandlesCreateOk = {
   __typename?: 'CandlesCreateOk'
   id: Scalars['Uuid']['output']
}

export type CandlesFilterInput = {
   categoryId?: InputMaybe<Scalars['Uuid']['input']>
   colorId?: InputMaybe<Scalars['Uuid']['input']>
}

export type CandlesMutation = {
   __typename?: 'CandlesMutation'
   createCandle: CandlesMutationResult
}

export type CandlesMutationCreateCandleArgs = {
   input: CreateCandleInput
}

export type CandlesMutationResult =
   | CandlesCreateOk
   | InternalErrorProblem
   | UnauthorizedProblem
   | VersionMismatchProblem

export type CandlesQuery = {
   __typename?: 'CandlesQuery'
   allCandles: AllCategoryResult
   candleById: CandlesByIdResult
   candleBySlug: CandlesBySlugResult
}

export type CandlesQueryAllCandlesArgs = {
   filter?: InputMaybe<CandlesFilterInput>
   pageNumber?: Scalars['PageNumber']['input']
   pageSize?: Scalars['PageSize']['input']
   sort?: InputMaybe<CandlesSortEnum>
}

export type CandlesQueryCandleByIdArgs = {
   input: CandlesByIdInput
}

export type CandlesQueryCandleBySlugArgs = {
   input: CandlesBySlugInput
}

export enum CandlesSortEnum {
   CreatedAtAsc = 'CREATED_AT_ASC',
   CreatedAtDesc = 'CREATED_AT_DESC',
   PriceAsc = 'PRICE_ASC',
   PriceDesc = 'PRICE_DESC',
   SortRankAsc = 'SORT_RANK_ASC',
   SortRankDesc = 'SORT_RANK_DESC'
}

export type Category = VersionInterface & {
   __typename?: 'Category'
   created_at: Scalars['DateTime']['output']
   id: Scalars['Uuid']['output']
   slug: Scalars['String']['output']
   title: Scalars['String']['output']
   updated_at: Scalars['DateTime']['output']
   version: Scalars['UInt']['output']
}

export type CategoryByIdInput = {
   id: Scalars['Uuid']['input']
}

export type CategoryByIdOk = {
   __typename?: 'CategoryByIdOk'
   category?: Maybe<Category>
}

export type CategoryByIdResult =
   | CategoryByIdOk
   | InternalErrorProblem
   | VersionMismatchProblem

export type CategoryBySlugInput = {
   slug: Scalars['String']['input']
}

export type CategoryBySlugOk = {
   __typename?: 'CategoryBySlugOk'
   category?: Maybe<Category>
}

export type CategoryBySlugResult =
   | CategoryBySlugOk
   | InternalErrorProblem
   | VersionMismatchProblem

export type CategoryCreateOk = {
   __typename?: 'CategoryCreateOk'
   id: Scalars['Uuid']['output']
}

export type CategoryCreateResult =
   | CategoryCreateOk
   | InternalErrorProblem
   | UnauthorizedProblem
   | VersionMismatchProblem

export type CategoryGetAllOk = {
   __typename?: 'CategoryGetAllOk'
   category: Array<Category>
}

export type CategoryGetAllResult = CategoryGetAllOk | InternalErrorProblem

export type CategoryMutation = {
   __typename?: 'CategoryMutation'
   createCategory: CategoryCreateResult
   delete?: Maybe<DeleteCategoryResult>
   updateCategory: UpdateCategoryResult
}

export type CategoryMutationCreateCategoryArgs = {
   input?: InputMaybe<CreateCategoryInput>
}

export type CategoryMutationDeleteArgs = {
   input?: InputMaybe<DeleteCategoryInput>
}

export type CategoryMutationUpdateCategoryArgs = {
   input: UpdateCategoryInput
}

export type CategoryQuery = {
   __typename?: 'CategoryQuery'
   categoryById: CategoryByIdResult
   categoryBySlug: CategoryBySlugResult
   getAllCategory: CategoryGetAllResult
}

export type CategoryQueryCategoryByIdArgs = {
   input: CategoryByIdInput
}

export type CategoryQueryCategoryBySlugArgs = {
   input: CategoryBySlugInput
}

export type Color = {
   __typename?: 'Color'
   created_at: Scalars['DateTime']['output']
   id: Scalars['Uuid']['output']
   slug: Scalars['String']['output']
   title: Scalars['String']['output']
   updated_at: Scalars['DateTime']['output']
   version: Scalars['UInt']['output']
}

export type ColorByIdInput = {
   id: Scalars['Uuid']['input']
}

export type ColorByIdOk = {
   __typename?: 'ColorByIdOk'
   colors: Color
}

export type ColorByIdResult =
   | ColorByIdOk
   | InternalErrorProblem
   | VersionMismatchProblem

export type ColorBySlugInput = {
   slug: Scalars['String']['input']
}

export type ColorBySlugOk = {
   __typename?: 'ColorBySlugOk'
   colors: Color
}

export type ColorBySlugResult =
   | ColorBySlugOk
   | InternalErrorProblem
   | VersionMismatchProblem

export type ColorCreateOk = {
   __typename?: 'ColorCreateOk'
   id: Scalars['Uuid']['output']
}

export type ColorCreateResult =
   | ColorCreateOk
   | InternalErrorProblem
   | UnauthorizedProblem
   | VersionMismatchProblem

export type ColorMutation = {
   __typename?: 'ColorMutation'
   createColor: ColorCreateResult
   delete?: Maybe<DeleteColorResult>
   updateColor: UpdateColorResult
}

export type ColorMutationCreateColorArgs = {
   input: CreateColorInput
}

export type ColorMutationDeleteArgs = {
   input?: InputMaybe<DeleteColorInput>
}

export type ColorMutationUpdateColorArgs = {
   input: UpdateColorInput
}

export type ColorQuery = {
   __typename?: 'ColorQuery'
   allColor: AllColorResult
   colorById: ColorByIdResult
   colorBySlug: ColorBySlugResult
}

export type ColorQueryColorByIdArgs = {
   input: ColorByIdInput
}

export type ColorQueryColorBySlugArgs = {
   input: ColorBySlugInput
}

export type CreateCandleInput = {
   category_id: Scalars['Uuid']['input']
   color_id: Scalars['Uuid']['input']
   description: Scalars['String']['input']
   images: Array<Scalars['Upload']['input']>
   price: Scalars['Int']['input']
   title: Scalars['String']['input']
   weight: Scalars['Int']['input']
}

export type CreateCategoryInput = {
   title: Scalars['String']['input']
}

export type CreateColorInput = {
   title: Scalars['String']['input']
}

export type CreateOrderInput = {
   items?: InputMaybe<Array<CreateOrderItem>>
}

export type CreateOrderItem = {
   price: Scalars['Int']['input']
   productsId: Scalars['Uuid']['input']
   quantity: Scalars['Int']['input']
}

export type CreateOrderOk = {
   __typename?: 'CreateOrderOk'
   ok: Scalars['String']['output']
}

export type CreateOrderResult =
   | CreateOrderOk
   | InternalErrorProblem
   | UnauthorizedProblem

export type DeleteCategoryInput = {
   id: Scalars['Uuid']['input']
}

export type DeleteCategoryOk = {
   __typename?: 'DeleteCategoryOk'
   ok: Scalars['Uuid']['output']
}

export type DeleteCategoryResult =
   | DeleteCategoryOk
   | InternalErrorProblem
   | VersionMismatchProblem

export type DeleteColorInput = {
   id: Scalars['Uuid']['input']
}

export type DeleteColorOk = {
   __typename?: 'DeleteColorOk'
   ok: Scalars['Uuid']['output']
}

export type DeleteColorResult =
   | DeleteColorOk
   | InternalErrorProblem
   | VersionMismatchProblem

export type DeleteTokensOk = {
   __typename?: 'DeleteTokensOk'
   ok: Scalars['String']['output']
}

export type DeleteTokensResult = DeleteTokensOk | InternalErrorProblem

export type InternalErrorProblem = ProblemInterface & {
   __typename?: 'InternalErrorProblem'
   message: Scalars['String']['output']
}

export type InvalidSortRankProblem = ProblemInterface & {
   __typename?: 'InvalidSortRankProblem'
   message: Scalars['String']['output']
}

export type LoginInput = {
   email: Scalars['String']['input']
   password: Scalars['String']['input']
}

export type LoginOk = {
   __typename?: 'LoginOk'
   email: Scalars['String']['output']
   phone: Scalars['String']['output']
   role: Role
   title: Scalars['String']['output']
}

export type LoginResult =
   | InternalErrorProblem
   | LoginOk
   | VersionMismatchProblem

export type Mutation = {
   __typename?: 'Mutation'
   auth: AuthMutations
   candles: CandlesMutation
   category: CategoryMutation
   color: ColorMutation
   orders: OrderMutations
}

export type NewTokensOk = {
   __typename?: 'NewTokensOk'
   token: Scalars['String']['output']
}

export type NewTokensResult = InternalErrorProblem | NewTokensOk

export type OrderItems = {
   __typename?: 'OrderItems'
   createdAt: Scalars['DateTime']['output']
   id: Scalars['Uuid']['output']
   orderId: Scalars['Uuid']['output']
   price: Scalars['Int']['output']
   product_id: Scalars['Uuid']['output']
   quantity: Scalars['Int']['output']
   status: Scalars['String']['output']
   updatedAt: Scalars['DateTime']['output']
   userId: Scalars['Uuid']['output']
   version: Scalars['UInt']['output']
}

export type OrderMutations = {
   __typename?: 'OrderMutations'
   createOrder: CreateOrderResult
}

export type OrderMutationsCreateOrderArgs = {
   input: CreateOrderInput
}

export type OrderQuery = {
   __typename?: 'OrderQuery'
   allOrders: AllOrdersResult
   allUserOrders: AllUserOrdersResult
}

export type Orders = {
   __typename?: 'Orders'
   createdAt: Scalars['DateTime']['output']
   id: Scalars['Uuid']['output']
   status: Scalars['String']['output']
   total_amount: Scalars['Int']['output']
   updatedAt: Scalars['DateTime']['output']
   userId: Scalars['Uuid']['output']
   version: Scalars['UInt']['output']
}

export type ProblemInterface = {
   message: Scalars['String']['output']
}

export type Query = {
   __typename?: 'Query'
   candles?: Maybe<CandlesQuery>
   category?: Maybe<CategoryQuery>
   color: ColorQuery
   orders: OrderQuery
   user?: Maybe<UserQuery>
}

export type RegistrationsInput = {
   email: Scalars['String']['input']
   password: Scalars['String']['input']
   phone: Scalars['String']['input']
   title: Scalars['String']['input']
}

export type RegistrationsOk = {
   __typename?: 'RegistrationsOk'
   email: Scalars['String']['output']
   phone: Scalars['String']['output']
   role: Role
   title: Scalars['String']['output']
}

export type RegistrationsResult =
   | InternalErrorProblem
   | RegistrationsOk
   | VersionMismatchProblem

export enum Role {
   Admin = 'admin',
   Guest = 'guest',
   User = 'user'
}

export type SortRankInput = {
   next?: Scalars['String']['input']
   prev?: Scalars['String']['input']
}

export type TotalCountResolvingOk = {
   __typename?: 'TotalCountResolvingOk'
   nextPage: Scalars['Boolean']['output']
   prevPage: Scalars['Boolean']['output']
   totalCount: Scalars['UInt']['output']
   totalCountPage: Scalars['UInt']['output']
}

export type TotalCountResolvingResult =
   | InternalErrorProblem
   | TotalCountResolvingOk
   | VersionMismatchProblem

export type UnauthorizedProblem = ProblemInterface & {
   __typename?: 'UnauthorizedProblem'
   message: Scalars['String']['output']
}

export type UpdateCategoryInput = {
   title: Scalars['String']['input']
}

export type UpdateCategoryOk = {
   __typename?: 'UpdateCategoryOk'
   id: Scalars['Uuid']['output']
}

export type UpdateCategoryResult =
   | InternalErrorProblem
   | UpdateCategoryOk
   | VersionMismatchProblem

export type UpdateColorInput = {
   title: Scalars['String']['input']
}

export type UpdateColorOk = {
   __typename?: 'UpdateColorOk'
   id: Scalars['Uuid']['output']
}

export type UpdateColorResult =
   | InternalErrorProblem
   | UpdateColorOk
   | VersionMismatchProblem

export type User = {
   __typename?: 'User'
   createdAt: Scalars['DateTime']['output']
   email: Scalars['String']['output']
   id: Scalars['Uuid']['output']
   password: Scalars['String']['output']
   phone: Scalars['String']['output']
   role: Role
   title: Scalars['String']['output']
   updatedAt: Scalars['DateTime']['output']
   version: Scalars['UInt']['output']
}

export type UserProfileOk = {
   __typename?: 'UserProfileOk'
   profile: User
}

export type UserProfileResult =
   | InternalErrorProblem
   | UserProfileOk
   | VersionMismatchProblem

export type UserQuery = {
   __typename?: 'UserQuery'
   profile: UserProfileResult
}

export type VersionInterface = {
   version: Scalars['UInt']['output']
}

export type VersionMismatchProblem = ProblemInterface & {
   __typename?: 'VersionMismatchProblem'
   message: Scalars['String']['output']
}

export class TypedDocumentString<TResult, TVariables>
   extends String
   implements DocumentTypeDecoration<TResult, TVariables>
{
   __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType']

   constructor(
      private value: string,
      public __meta__?: Record<string, any> | undefined
   ) {
      super(value)
   }

   toString(): string & DocumentTypeDecoration<TResult, TVariables> {
      return this.value
   }
}
