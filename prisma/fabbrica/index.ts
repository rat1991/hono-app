import type { Users } from "@prisma/client";
import type { Works } from "@prisma/client";
import type { Prisma, PrismaClient } from "@prisma/client";
import { createInitializer, createScreener, getScalarFieldValueGenerator, normalizeResolver, normalizeList, getSequenceCounter, createCallbackChain, destructure } from "@quramy/prisma-fabbrica/lib/internal";
import type { ModelWithFields, Resolver, } from "@quramy/prisma-fabbrica/lib/internal";
export { resetSequence, registerScalarFieldValueGenerator, resetScalarFieldValueGenerator } from "@quramy/prisma-fabbrica/lib/internal";

type BuildDataOptions<TTransients extends Record<string, unknown>> = {
    readonly seq: number;
} & TTransients;

type TraitName = string | symbol;

type CallbackDefineOptions<TCreated, TCreateInput, TTransients extends Record<string, unknown>> = {
    onAfterBuild?: (createInput: TCreateInput, transientFields: TTransients) => void | PromiseLike<void>;
    onBeforeCreate?: (createInput: TCreateInput, transientFields: TTransients) => void | PromiseLike<void>;
    onAfterCreate?: (created: TCreated, transientFields: TTransients) => void | PromiseLike<void>;
};

const initializer = createInitializer();

const { getClient } = initializer;

export const { initialize } = initializer;

const modelFieldDefinitions: ModelWithFields[] = [{
        name: "Users",
        fields: []
    }, {
        name: "Works",
        fields: []
    }];

type UsersScalarOrEnumFields = {
    email: string;
    password: string;
};

type UsersFactoryDefineInput = {
    email?: string;
    password?: string;
    name?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
};

type UsersTransientFields = Record<string, unknown> & Partial<Record<keyof UsersFactoryDefineInput, never>>;

type UsersFactoryTrait<TTransients extends Record<string, unknown>> = {
    data?: Resolver<Partial<UsersFactoryDefineInput>, BuildDataOptions<TTransients>>;
} & CallbackDefineOptions<Users, Prisma.UsersCreateInput, TTransients>;

type UsersFactoryDefineOptions<TTransients extends Record<string, unknown> = Record<string, unknown>> = {
    defaultData?: Resolver<UsersFactoryDefineInput, BuildDataOptions<TTransients>>;
    traits?: {
        [traitName: TraitName]: UsersFactoryTrait<TTransients>;
    };
} & CallbackDefineOptions<Users, Prisma.UsersCreateInput, TTransients>;

type UsersTraitKeys<TOptions extends UsersFactoryDefineOptions<any>> = Exclude<keyof TOptions["traits"], number>;

export interface UsersFactoryInterfaceWithoutTraits<TTransients extends Record<string, unknown>> {
    readonly _factoryFor: "Users";
    build(inputData?: Partial<Prisma.UsersCreateInput & TTransients>): PromiseLike<Prisma.UsersCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.UsersCreateInput & TTransients>): PromiseLike<Prisma.UsersCreateInput>;
    buildList(list: readonly Partial<Prisma.UsersCreateInput & TTransients>[]): PromiseLike<Prisma.UsersCreateInput[]>;
    buildList(count: number, item?: Partial<Prisma.UsersCreateInput & TTransients>): PromiseLike<Prisma.UsersCreateInput[]>;
    pickForConnect(inputData: Users): Pick<Users, "id">;
    create(inputData?: Partial<Prisma.UsersCreateInput & TTransients>): PromiseLike<Users>;
    createList(list: readonly Partial<Prisma.UsersCreateInput & TTransients>[]): PromiseLike<Users[]>;
    createList(count: number, item?: Partial<Prisma.UsersCreateInput & TTransients>): PromiseLike<Users[]>;
    createForConnect(inputData?: Partial<Prisma.UsersCreateInput & TTransients>): PromiseLike<Pick<Users, "id">>;
}

export interface UsersFactoryInterface<TTransients extends Record<string, unknown> = Record<string, unknown>, TTraitName extends TraitName = TraitName> extends UsersFactoryInterfaceWithoutTraits<TTransients> {
    use(name: TTraitName, ...names: readonly TTraitName[]): UsersFactoryInterfaceWithoutTraits<TTransients>;
}

function autoGenerateUsersScalarsOrEnums({ seq }: {
    readonly seq: number;
}): UsersScalarOrEnumFields {
    return {
        email: getScalarFieldValueGenerator().String({ modelName: "Users", fieldName: "email", isId: false, isUnique: true, seq }),
        password: getScalarFieldValueGenerator().String({ modelName: "Users", fieldName: "password", isId: false, isUnique: false, seq })
    };
}

function defineUsersFactoryInternal<TTransients extends Record<string, unknown>, TOptions extends UsersFactoryDefineOptions<TTransients>>({ defaultData: defaultDataResolver, onAfterBuild, onBeforeCreate, onAfterCreate, traits: traitsDefs = {} }: TOptions, defaultTransientFieldValues: TTransients): UsersFactoryInterface<TTransients, UsersTraitKeys<TOptions>> {
    const getFactoryWithTraits = (traitKeys: readonly UsersTraitKeys<TOptions>[] = []) => {
        const seqKey = {};
        const getSeq = () => getSequenceCounter(seqKey);
        const screen = createScreener("Users", modelFieldDefinitions);
        const handleAfterBuild = createCallbackChain([
            onAfterBuild,
            ...traitKeys.map(traitKey => traitsDefs[traitKey]?.onAfterBuild),
        ]);
        const handleBeforeCreate = createCallbackChain([
            ...traitKeys.slice().reverse().map(traitKey => traitsDefs[traitKey]?.onBeforeCreate),
            onBeforeCreate,
        ]);
        const handleAfterCreate = createCallbackChain([
            onAfterCreate,
            ...traitKeys.map(traitKey => traitsDefs[traitKey]?.onAfterCreate),
        ]);
        const build = async (inputData: Partial<Prisma.UsersCreateInput & TTransients> = {}) => {
            const seq = getSeq();
            const requiredScalarData = autoGenerateUsersScalarsOrEnums({ seq });
            const resolveValue = normalizeResolver<UsersFactoryDefineInput, BuildDataOptions<any>>(defaultDataResolver ?? {});
            const [transientFields, filteredInputData] = destructure(defaultTransientFieldValues, inputData);
            const resolverInput = { seq, ...transientFields };
            const defaultData = await traitKeys.reduce(async (queue, traitKey) => {
                const acc = await queue;
                const resolveTraitValue = normalizeResolver<Partial<UsersFactoryDefineInput>, BuildDataOptions<TTransients>>(traitsDefs[traitKey]?.data ?? {});
                const traitData = await resolveTraitValue(resolverInput);
                return {
                    ...acc,
                    ...traitData,
                };
            }, resolveValue(resolverInput));
            const defaultAssociations = {} as Prisma.UsersCreateInput;
            const data: Prisma.UsersCreateInput = { ...requiredScalarData, ...defaultData, ...defaultAssociations, ...filteredInputData };
            await handleAfterBuild(data, transientFields);
            return data;
        };
        const buildList = (...args: unknown[]) => Promise.all(normalizeList<Partial<Prisma.UsersCreateInput & TTransients>>(...args).map(data => build(data)));
        const pickForConnect = (inputData: Users) => ({
            id: inputData.id
        });
        const create = async (inputData: Partial<Prisma.UsersCreateInput & TTransients> = {}) => {
            const [transientFields] = destructure(defaultTransientFieldValues, inputData);
            const data = await build(inputData).then(screen);
            await handleBeforeCreate(data, transientFields);
            const createdData = await getClient<PrismaClient>().users.create({ data });
            await handleAfterCreate(createdData, transientFields);
            return createdData;
        };
        const createList = (...args: unknown[]) => Promise.all(normalizeList<Partial<Prisma.UsersCreateInput & TTransients>>(...args).map(data => create(data)));
        const createForConnect = (inputData: Partial<Prisma.UsersCreateInput & TTransients> = {}) => create(inputData).then(pickForConnect);
        return {
            _factoryFor: "Users" as const,
            build,
            buildList,
            buildCreateInput: build,
            pickForConnect,
            create,
            createList,
            createForConnect,
        };
    };
    const factory = getFactoryWithTraits();
    const useTraits = (name: UsersTraitKeys<TOptions>, ...names: readonly UsersTraitKeys<TOptions>[]) => {
        return getFactoryWithTraits([name, ...names]);
    };
    return {
        ...factory,
        use: useTraits,
    };
}

interface UsersFactoryBuilder {
    <TOptions extends UsersFactoryDefineOptions>(options?: TOptions): UsersFactoryInterface<{}, UsersTraitKeys<TOptions>>;
    withTransientFields: <TTransients extends UsersTransientFields>(defaultTransientFieldValues: TTransients) => <TOptions extends UsersFactoryDefineOptions<TTransients>>(options?: TOptions) => UsersFactoryInterface<TTransients, UsersTraitKeys<TOptions>>;
}

/**
 * Define factory for {@link Users} model.
 *
 * @param options
 * @returns factory {@link UsersFactoryInterface}
 */
export const defineUsersFactory = (<TOptions extends UsersFactoryDefineOptions>(options?: TOptions): UsersFactoryInterface<TOptions> => {
    return defineUsersFactoryInternal(options ?? {}, {});
}) as UsersFactoryBuilder;

defineUsersFactory.withTransientFields = defaultTransientFieldValues => options => defineUsersFactoryInternal(options ?? {}, defaultTransientFieldValues);

type WorksScalarOrEnumFields = {
    title: string;
    content: string;
};

type WorksFactoryDefineInput = {
    title?: string;
    content?: string;
    createdAt?: Date;
    updatedAt?: Date;
};

type WorksTransientFields = Record<string, unknown> & Partial<Record<keyof WorksFactoryDefineInput, never>>;

type WorksFactoryTrait<TTransients extends Record<string, unknown>> = {
    data?: Resolver<Partial<WorksFactoryDefineInput>, BuildDataOptions<TTransients>>;
} & CallbackDefineOptions<Works, Prisma.WorksCreateInput, TTransients>;

type WorksFactoryDefineOptions<TTransients extends Record<string, unknown> = Record<string, unknown>> = {
    defaultData?: Resolver<WorksFactoryDefineInput, BuildDataOptions<TTransients>>;
    traits?: {
        [traitName: TraitName]: WorksFactoryTrait<TTransients>;
    };
} & CallbackDefineOptions<Works, Prisma.WorksCreateInput, TTransients>;

type WorksTraitKeys<TOptions extends WorksFactoryDefineOptions<any>> = Exclude<keyof TOptions["traits"], number>;

export interface WorksFactoryInterfaceWithoutTraits<TTransients extends Record<string, unknown>> {
    readonly _factoryFor: "Works";
    build(inputData?: Partial<Prisma.WorksCreateInput & TTransients>): PromiseLike<Prisma.WorksCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.WorksCreateInput & TTransients>): PromiseLike<Prisma.WorksCreateInput>;
    buildList(list: readonly Partial<Prisma.WorksCreateInput & TTransients>[]): PromiseLike<Prisma.WorksCreateInput[]>;
    buildList(count: number, item?: Partial<Prisma.WorksCreateInput & TTransients>): PromiseLike<Prisma.WorksCreateInput[]>;
    pickForConnect(inputData: Works): Pick<Works, "id">;
    create(inputData?: Partial<Prisma.WorksCreateInput & TTransients>): PromiseLike<Works>;
    createList(list: readonly Partial<Prisma.WorksCreateInput & TTransients>[]): PromiseLike<Works[]>;
    createList(count: number, item?: Partial<Prisma.WorksCreateInput & TTransients>): PromiseLike<Works[]>;
    createForConnect(inputData?: Partial<Prisma.WorksCreateInput & TTransients>): PromiseLike<Pick<Works, "id">>;
}

export interface WorksFactoryInterface<TTransients extends Record<string, unknown> = Record<string, unknown>, TTraitName extends TraitName = TraitName> extends WorksFactoryInterfaceWithoutTraits<TTransients> {
    use(name: TTraitName, ...names: readonly TTraitName[]): WorksFactoryInterfaceWithoutTraits<TTransients>;
}

function autoGenerateWorksScalarsOrEnums({ seq }: {
    readonly seq: number;
}): WorksScalarOrEnumFields {
    return {
        title: getScalarFieldValueGenerator().String({ modelName: "Works", fieldName: "title", isId: false, isUnique: false, seq }),
        content: getScalarFieldValueGenerator().String({ modelName: "Works", fieldName: "content", isId: false, isUnique: false, seq })
    };
}

function defineWorksFactoryInternal<TTransients extends Record<string, unknown>, TOptions extends WorksFactoryDefineOptions<TTransients>>({ defaultData: defaultDataResolver, onAfterBuild, onBeforeCreate, onAfterCreate, traits: traitsDefs = {} }: TOptions, defaultTransientFieldValues: TTransients): WorksFactoryInterface<TTransients, WorksTraitKeys<TOptions>> {
    const getFactoryWithTraits = (traitKeys: readonly WorksTraitKeys<TOptions>[] = []) => {
        const seqKey = {};
        const getSeq = () => getSequenceCounter(seqKey);
        const screen = createScreener("Works", modelFieldDefinitions);
        const handleAfterBuild = createCallbackChain([
            onAfterBuild,
            ...traitKeys.map(traitKey => traitsDefs[traitKey]?.onAfterBuild),
        ]);
        const handleBeforeCreate = createCallbackChain([
            ...traitKeys.slice().reverse().map(traitKey => traitsDefs[traitKey]?.onBeforeCreate),
            onBeforeCreate,
        ]);
        const handleAfterCreate = createCallbackChain([
            onAfterCreate,
            ...traitKeys.map(traitKey => traitsDefs[traitKey]?.onAfterCreate),
        ]);
        const build = async (inputData: Partial<Prisma.WorksCreateInput & TTransients> = {}) => {
            const seq = getSeq();
            const requiredScalarData = autoGenerateWorksScalarsOrEnums({ seq });
            const resolveValue = normalizeResolver<WorksFactoryDefineInput, BuildDataOptions<any>>(defaultDataResolver ?? {});
            const [transientFields, filteredInputData] = destructure(defaultTransientFieldValues, inputData);
            const resolverInput = { seq, ...transientFields };
            const defaultData = await traitKeys.reduce(async (queue, traitKey) => {
                const acc = await queue;
                const resolveTraitValue = normalizeResolver<Partial<WorksFactoryDefineInput>, BuildDataOptions<TTransients>>(traitsDefs[traitKey]?.data ?? {});
                const traitData = await resolveTraitValue(resolverInput);
                return {
                    ...acc,
                    ...traitData,
                };
            }, resolveValue(resolverInput));
            const defaultAssociations = {} as Prisma.WorksCreateInput;
            const data: Prisma.WorksCreateInput = { ...requiredScalarData, ...defaultData, ...defaultAssociations, ...filteredInputData };
            await handleAfterBuild(data, transientFields);
            return data;
        };
        const buildList = (...args: unknown[]) => Promise.all(normalizeList<Partial<Prisma.WorksCreateInput & TTransients>>(...args).map(data => build(data)));
        const pickForConnect = (inputData: Works) => ({
            id: inputData.id
        });
        const create = async (inputData: Partial<Prisma.WorksCreateInput & TTransients> = {}) => {
            const [transientFields] = destructure(defaultTransientFieldValues, inputData);
            const data = await build(inputData).then(screen);
            await handleBeforeCreate(data, transientFields);
            const createdData = await getClient<PrismaClient>().works.create({ data });
            await handleAfterCreate(createdData, transientFields);
            return createdData;
        };
        const createList = (...args: unknown[]) => Promise.all(normalizeList<Partial<Prisma.WorksCreateInput & TTransients>>(...args).map(data => create(data)));
        const createForConnect = (inputData: Partial<Prisma.WorksCreateInput & TTransients> = {}) => create(inputData).then(pickForConnect);
        return {
            _factoryFor: "Works" as const,
            build,
            buildList,
            buildCreateInput: build,
            pickForConnect,
            create,
            createList,
            createForConnect,
        };
    };
    const factory = getFactoryWithTraits();
    const useTraits = (name: WorksTraitKeys<TOptions>, ...names: readonly WorksTraitKeys<TOptions>[]) => {
        return getFactoryWithTraits([name, ...names]);
    };
    return {
        ...factory,
        use: useTraits,
    };
}

interface WorksFactoryBuilder {
    <TOptions extends WorksFactoryDefineOptions>(options?: TOptions): WorksFactoryInterface<{}, WorksTraitKeys<TOptions>>;
    withTransientFields: <TTransients extends WorksTransientFields>(defaultTransientFieldValues: TTransients) => <TOptions extends WorksFactoryDefineOptions<TTransients>>(options?: TOptions) => WorksFactoryInterface<TTransients, WorksTraitKeys<TOptions>>;
}

/**
 * Define factory for {@link Works} model.
 *
 * @param options
 * @returns factory {@link WorksFactoryInterface}
 */
export const defineWorksFactory = (<TOptions extends WorksFactoryDefineOptions>(options?: TOptions): WorksFactoryInterface<TOptions> => {
    return defineWorksFactoryInternal(options ?? {}, {});
}) as WorksFactoryBuilder;

defineWorksFactory.withTransientFields = defaultTransientFieldValues => options => defineWorksFactoryInternal(options ?? {}, defaultTransientFieldValues);
