import { useStore } from "@lib/context/store-context"
import { LineItem, Region } from "@medusajs/medusa"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import NativeSelect from "@modules/common/components/native-select"
import Trash from "@modules/common/icons/trash"
import Thumbnail from "@modules/products/components/thumbnail"

type ItemProps = {
  item: Omit<LineItem, "beforeInsert">
  region: Region
}

const Item = ({ item, region }: ItemProps) => {
  const { updateItem, deleteItem } = useStore()

  return (
    <div>
      {/* <div className="grid grid-cols-[122px_1fr] gap-x-4">
        <div className="w-[122px]">
          <Thumbnail thumbnail={item.thumbnail} size="full" />
        </div>
        <div className="text-base-regular flex flex-col gap-y-8">
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <span>{item.title}</span>
              <LineItemOptions variant={item.variant} />
            </div>
            <NativeSelect
              value={item.quantity}
              onChange={(value) =>
                updateItem({
                  lineId: item.id,
                  quantity: parseInt(value.target.value),
                })
              }
              className="max-h-[35px] w-[75px]"
            >
              {Array.from([...Array(item.variant.inventory_quantity)].keys())
                .slice(0, 10)
                .map((i) => {
                  const value = i + 1
                  return (
                    <option value={value} key={i}>
                      {value}
                    </option>
                  )
                })}
            </NativeSelect>
          </div>
          <div className="flex items-end justify-between text-small-regular flex-1">
            <div>
              <button
                className="flex items-center gap-x-1 text-gray-500"
                onClick={() => deleteItem(item.id)}
              >
                <Trash size={14} />
                <span>Remove</span>
              </button>
            </div>
            <div>
              <LineItemPrice item={item} region={region} />
            </div>
          </div>
        </div>
      </div> */}
      {/* ------------------ */}
      <div className="checkout-detail flex justify-between ">
        <div className="number flex items-center justify-center  ">
          <div className="  rounded-lg text-base font-medium leading-5 tracking-wider">
            <NativeSelect
              value={item.quantity}
              onChange={(value) =>
                updateItem({
                  lineId: item.id,
                  quantity: parseInt(value.target.value),
                })
              }
              className="max-h-[35px] w-[75px]"
            >
              {Array.from([...Array(item.variant.inventory_quantity)].keys())
                .slice(0, 10)
                .map((i) => {
                  const value = i + 1
                  return (
                    <option value={value} key={i}>
                      {value}
                    </option>
                  )
                })}
            </NativeSelect>
          </div>
        </div>
        <div className="img flex items-center justify-center">
          <div className="w-[122px]">
            <Thumbnail thumbnail={item.thumbnail} size="full" />
          </div>
        </div>
        <div className="name flex items-center justify-center">{item.title}</div>
        <div className="price flex items-center justify-center"> <LineItemPrice item={item} region={region} /></div>
      </div>
    </div>
  )
}

export default Item